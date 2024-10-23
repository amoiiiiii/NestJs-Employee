import { Controller, Post, Body, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { LoginUserDTO } from '../dtos/login-user.dto';
import { ApiTags, ApiBody, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'User login' })
  @ApiBody({ type: LoginUserDTO })
  @ApiResponse({
    status: 200,
    description: 'Login successful, JWT token returned.',
    schema: {
      example: {
        access_token: 'your_jwt_token_here',
        role: 'admin',
      },
    },
  })
  @ApiResponse({
    status: 401,
    description: 'Unauthorized, login failed.',
    schema: {
      example: {
        statusCode: 401,
        message: 'Invalid password',
        error: 'Unauthorized',
      },
    },
  })
  async login(@Body() body: LoginUserDTO) {
    return this.authService.login(body);
  }
}
