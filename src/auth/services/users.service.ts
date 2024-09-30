import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { Employee } from '../../employees/entity/employee.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Create a new user
  async create(createUserDto: CreateUserDto): Promise<User> {
    const employee = await this.employeeRepository.findOne({
      where: { id: createUserDto.employeeId },
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    const user = this.userRepository.create({
      username: createUserDto.username,
      password: createUserDto.password, // Password should be hashed
      employee: employee,
    });

    return this.userRepository.save(user);
  }

  // Find user by username
  async findByUsername(username: string): Promise<User | undefined> {
    return this.userRepository.findOne({
      where: { username },
      relations: ['employee'], // Include employee details
    });
  }
}
