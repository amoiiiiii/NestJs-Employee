import { Injectable } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { CredentialsDTO } from '../dtos/credintial-user.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(credentials: CredentialsDTO): Promise<any> {
    const user = await this.usersService.findByUsername(credentials.username);

    if (user && (await bcrypt.compare(credentials.password, user.password))) {
      const { password: result } = user;
      return result;
    }

    return null;
  }
  async login(loginDto: { username: string; password: string }) {
    const user = await this.validateUser(loginDto);
    if (!user) {
      throw new Error('Invalid credentials');
    }
    const payload = { username: user.username, sub: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
