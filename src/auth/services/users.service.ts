import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CredentialsDTO } from '../dtos/credentials-user.dto';
import { Employee } from '../../employees/entity/employee.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Membuat user baru dengan error handling
  async create(
    createUserDto: CredentialsDTO,
  ): Promise<{ message: string; user?: User }> {
    try {
      // Cari employee berdasarkan ID
      const employee = await this.employeeRepository.findOne({
        where: { id: createUserDto.employeeId },
      });

      if (!employee) {
        throw new Error('Employee tidak ditemukan');
      }

      // Membuat objek User baru
      const user = this.userRepository.create({
        username: createUserDto.username,
        password: createUserDto.password, // Password ini harus di-hash sebelum disimpan
        role: createUserDto.role, // Menambahkan role sesuai dengan DTO
        employee: employee, // Mengaitkan employee
      });

      // Simpan user ke dalam repository
      const savedUser = await this.userRepository.save(user);
      return { message: 'User berhasil dibuat', user: savedUser };
    } catch (error) {
      return { message: `Gagal membuat user: ${error.message}` };
    }
  }

  // Mencari user berdasarkan username dengan error handling
  async findByUsername(
    username: string,
  ): Promise<{ message: string; user?: User }> {
    try {
      // Cari user berdasarkan username
      const user = await this.userRepository.findOne({
        where: { username },
        relations: ['employee'], // Memastikan employee terkait dimuat
      });

      if (!user) {
        return { message: 'User tidak ditemukan' };
      }

      return { message: 'User ditemukan', user };
    } catch (error) {
      return { message: `Error saat mencari user: ${error.message}` };
    }
  }
}
