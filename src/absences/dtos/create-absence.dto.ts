import { IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAbsenceDto {
  @ApiProperty({
    example: '2024-01-01',
    description: 'The start date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    example: '2024-01-05',
    description: 'The end date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    example: 'Medical leave',
    description: 'The reason for the absence',
  })
  @IsString()
  reason: string;

  @ApiProperty({
    example: '123',
    description: 'The ID of the employee taking the absence',
  })
  @IsString()
  employeeId: string;
}
