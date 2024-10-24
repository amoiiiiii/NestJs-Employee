import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUserDTO {
  @ApiProperty({
    example: 'john_doe@gmail.com',
    description: 'Email for login',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'defaultpassword',
    description: 'Password for login',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
