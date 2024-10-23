import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CredentialsDTO } from '../dtos/credentials-user.dto';
import { User } from '../entity/user.entity';

@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(
    @Body() createUserDto: CredentialsDTO,
  ): Promise<{ message: string; user?: User }> {
    return this.usersService.create(createUserDto);
  }
}
