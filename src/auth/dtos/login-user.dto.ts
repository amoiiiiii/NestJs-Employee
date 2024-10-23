import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty({
    example: 'john_doe',
    description: 'Username for login',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'StrongPassword123',
    description: 'Password for login',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
