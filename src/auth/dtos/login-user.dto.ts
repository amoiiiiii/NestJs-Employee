import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
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

  @ApiProperty({
    example: 123,
    description: 'Employee ID associated with the login user',
    required: false,
  })
  @IsNumber()
  @IsNotEmpty()
  employeeId: number;
}
