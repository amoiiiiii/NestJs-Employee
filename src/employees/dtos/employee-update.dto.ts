import { IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateEmployeeDto {
  @ApiPropertyOptional({ description: 'The updated name of the employee' })
  @IsString()
  @IsOptional()
  name?: string;

  @ApiPropertyOptional({ description: 'The updated position of the employee' })
  @IsString()
  @IsOptional()
  position?: string;

  @ApiPropertyOptional({ description: 'The updated salary of the employee' })
  @IsNumber()
  @IsOptional()
  salary?: number;
}
