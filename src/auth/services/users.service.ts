import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CredentialsDTO } from '../dtos/credentials-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(
    createUserDto: CredentialsDTO,
  ): Promise<{ message: string; user?: User }> {
    try {
      // Create a new user object with email
      const user = this.userRepository.create({
        username: createUserDto.username,
        password: createUserDto.password, // Remember to hash the password before saving
        email: createUserDto.email,
        role: createUserDto.role,
      });

      const savedUser = await this.userRepository.save(user);
      return { message: 'User berhasil dibuat', user: savedUser };
    } catch (error) {
      return { message: `Gagal membuat user: ${error.message}` };
    }
  }

  // Method to find a user by username remains unchanged
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
