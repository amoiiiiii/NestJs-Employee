import { IsString, IsDateString, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateAttendanceDto {
  @ApiProperty({
    description: 'The date of attendance (YYYY-MM-DD)',
    example: '2024-10-17',
  })
  @IsDateString()
  date: string;

  @ApiProperty({
    description: 'The time when the employee checked in (HH:MM:SS)',
    example: '08:30:00',
  })
  @IsString()
  timeIn: string;

  @ApiPropertyOptional({
    description: 'The time when the employee checked out (HH:MM:SS)',
    example: '17:00:00',
  })
  @IsString()
  @IsOptional()
  timeOut?: string;

  @ApiProperty({
    description: 'The ID of the employee attending',
    example: '12345',
  })
  @IsString()
  employeeId: string;
}
