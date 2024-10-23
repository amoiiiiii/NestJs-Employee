import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { CredentialsDTO } from '../dtos/credentials-user.dto';
import { ApiTags, ApiOperation, ApiBody } from '@nestjs/swagger';
import { User } from '../entities/user.entity';

@ApiTags('Users')
@Controller('users')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new user' })
  @ApiBody({ type: CredentialsDTO })
  async createUser(
    @Body() createUserDto: CredentialsDTO,
  ): Promise<{ message: string; user?: User }> {
    return this.usersService.create(createUserDto);
  }
}
