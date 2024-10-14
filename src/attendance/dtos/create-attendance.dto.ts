import { IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({
    description: 'The date of attendance (YYYY-MM-DD)',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    description: 'The time when the employee checked in (HH:MM:SS)',
  })
  @IsString()
  timeIn: string;

  @ApiPropertyOptional({
    description: 'The time when the employee checked out (HH:MM:SS)',
  })
  @IsString()
  @IsOptional()
  timeOut?: string;

  @ApiProperty({
    description: 'The ID of the employee attending',
  })
  @IsString()
  employeeId: string;
}
