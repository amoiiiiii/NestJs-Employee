import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
import { User } from '../entity/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CredentialsDTO): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}
