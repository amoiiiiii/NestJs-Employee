import { IsString, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
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
    example: 'StrongPassword123',
    description: 'Password for the user',
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @ApiProperty({
    example: 123,
    description: 'Employee ID associated with the user',
    required: false,
  })
  @IsNumber()
  @IsOptional()
  employeeId: number;

  @ApiProperty({
    example: 'admin',
    description: 'Role of the user (e.g., admin, user, super_admin)',
  })
  @IsString()
  @IsNotEmpty()
  role: string;
}
