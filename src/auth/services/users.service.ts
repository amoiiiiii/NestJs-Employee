import { Injectable, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { Employee } from '../../employees/entities/employee.entity';
import { CredentialsDTO } from '../dtos/credentials-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(
    createUserDto: CredentialsDTO,
  ): Promise<{ message: string; user?: User }> {
    try {
      let employee = null;

      if (createUserDto.employeeId) {
        employee = await this.employeeRepository.findOne({
          where: { id: createUserDto.employeeId },
        });

        if (!employee) {
          throw new BadRequestException('Invalid Employee ID');
        }
      }

      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const user = this.userRepository.create({
        username: createUserDto.username,
        password: hashedPassword,
        email: createUserDto.email,
        role: createUserDto.role,
        employee: employee,
      });

      const savedUser = await this.userRepository.save(user);
      return { message: 'User successfully created', user: savedUser };
    } catch (error) {
      return { message: `Failed to create user: ${error.message}` };
    }
  }
  async findByUsername(
    username: string,
  ): Promise<{ message: string; user?: User }> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      return { message: 'User not found' };
    }

    return { message: 'User found', user };
  }
}
