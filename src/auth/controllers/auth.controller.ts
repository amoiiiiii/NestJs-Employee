import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CredentialsDTO } from '../dtos/credintial-user.dto'; // Move DTO to its own file for cleaner code

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body() body: CredentialsDTO) {
    const user = await this.authService.validateUser(body); // Pass body as a single object
    if (!user) {
      throw new Error('Invalid credentials');
    }

    return this.authService.login(user);
  }
}
