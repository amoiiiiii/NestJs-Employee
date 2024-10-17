import { IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class UpdateAbsenceDto {
  @ApiPropertyOptional({
    example: '2024-01-01',
    description: 'The start date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  @IsOptional()
  startDate?: string;

  @ApiPropertyOptional({
    example: '2024-01-05',
    description: 'The end date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  @IsOptional()
  endDate?: string;

  @ApiPropertyOptional({
    example: 'Medical leave',
    description: 'The reason for the absence',
  })
  @IsString()
  @IsOptional()
  reason?: string;

  @ApiPropertyOptional({
    example: '123',
    description: 'The ID of the employee taking the absence',
  })
  @IsString()
  @IsOptional()
  employeeId?: string;
}
