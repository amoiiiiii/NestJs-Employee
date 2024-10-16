import { IsString, IsDateString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAbsenceDto {
  @ApiProperty({
    description: 'The start date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  startDate: string;

  @ApiProperty({
    description: 'The end date of the absence (YYYY-MM-DD)',
  })
  @IsDateString()
  endDate: string;

  @ApiProperty({
    description: 'The reason for the absence',
  })
  @IsString()
  reason: string;

  @ApiProperty({
    description: 'The ID of the employee taking the absence',
  })
  @IsString()
  employeeId: string;
}
