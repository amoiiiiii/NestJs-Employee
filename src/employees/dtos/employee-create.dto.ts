import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateEmployeeDto {
  @ApiProperty({ description: 'The name of the employee' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'The position of the employee' })
  @IsString()
  @IsNotEmpty()
  position: string;

  @ApiProperty({ description: 'The salary of the employee' })
  @IsNumber()
  @IsNotEmpty()
  salary: number;
}
