import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { LoginUserDTO } from '../dtos/login-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(loginDto: LoginUserDTO): Promise<any> {
    const result = await this.usersService.findByUsername(loginDto.username);

    if (result.message !== 'User found') {
      throw new UnauthorizedException(result.message);
    }

    const user = result.user;

    const isPasswordValid = await bcrypt.compare(
      loginDto.password,
      user.password,
    );

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }

    return user;
  }
  async login(loginDto: LoginUserDTO) {
    const user = await this.validateUser(loginDto);
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
