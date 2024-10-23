import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CredentialsDTO } from '../dtos/credentials-user.dto';
import { Employee } from '../../employees/entities/employee.entity';

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
      const employee = await this.employeeRepository.findOne({
        where: { id: createUserDto.employeeId },
      });

      if (!employee) {
        throw new Error('Employee tidak ditemukan');
      }

      // Create a new user object with email
      const user = this.userRepository.create({
        username: createUserDto.username,
        password: createUserDto.password, // Pastikan untuk mengenkripsi password sebelum menyimpan
        email: createUserDto.email,
        role: createUserDto.role,
        employee: employee,
      });

      const savedUser = await this.userRepository.save(user);
      return { message: 'User berhasil dibuat', user: savedUser };
    } catch (error) {
      return { message: `Gagal membuat user: ${error.message}` };
    }
  }

  // Menambahkan metode untuk mencari user berdasarkan username
  async findByUsername(
    username: string,
  ): Promise<{ message: string; user?: User }> {
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      return { message: 'User tidak ditemukan' };
    }

    return { message: 'User ditemukan', user };
  }
}
