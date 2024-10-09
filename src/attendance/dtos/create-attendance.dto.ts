import { IsString, IsDateString, IsOptional } from 'class-validator';

export class CreateAttendanceDto {
  @IsDateString()
  date: string;

  @IsString()
  timeIn: string;

  @IsString()
  @IsOptional()
  timeOut?: string;

  @IsString()
  employeeId: string;
}
