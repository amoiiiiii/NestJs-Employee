import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
import { LoginUserDTO } from '../dtos/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(credentials: CredentialsDTO): Promise<any> {
    try {
      const user = await this.usersService.findByUsername(credentials.username);
      if (!user) {
        return { error: 'User not found' };
      }
      const isPasswordValid = await bcrypt.compare(
        credentials.password,
        user.password,
      );
      if (!isPasswordValid) {
        return { error: 'Invalid password' };
      }
      return user;
    } catch (error) {
      console.error('Error during user validation:', error); // Log error
      return { error: 'An error occurred during user validation' };
    }
  }
  async login(loginDto: LoginUserDTO) {
    try {
      const user = await this.validateUser(loginDto);
      if (user.error) {
        throw new Error(user.error);
      }
      const payload = { username: user.username, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
      };
    } catch (error) {
      console.error('Error during login:', error); // Log error
      throw new Error('Invalid credentials or user validation failed');
    }
  }
}
