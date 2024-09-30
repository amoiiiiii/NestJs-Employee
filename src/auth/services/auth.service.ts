import { Injectable } from '@nestjs/common';
import { UsersService } from './users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async register(createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    // Correctly using await with parentheses
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result; // return user details without the password
    }
    return null; // return null if user is not found or password doesn't match
  }

  async login(loginDto: { username: string; password: string }) {
    const user = await this.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      throw new Error('Invalid credentials'); // Handle invalid credentials
    }
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload), // Create JWT token
    };
  }
}
