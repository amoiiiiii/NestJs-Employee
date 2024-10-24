import { IsString, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDTO {
  @ApiProperty({
    example: 'john_doe',
    description: 'Username for the user',
  })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'defaultpassword',
    description: 'Password for the user',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 'john@gmail.com',
    description: 'Email for the user',
  })
  @IsString()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'super_admin',
    description: 'Role of the user (e.g., admin, user, super_admin)',
  })
  @IsString()
  @IsNotEmpty()
  role: string;

  @ApiProperty({
    example: 1,
    description: 'Employee ID to associate with the user',
    required: false,
  })
  @IsOptional()
  employeeId?: number;
}
