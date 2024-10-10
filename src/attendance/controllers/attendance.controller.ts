import { Controller, Get, Post, Body } from '@nestjs/common';
import { AttendanceService } from '../service/attendance.service';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { Attendance } from '../entity/attendance.entity';

@Controller('attendances')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  create(
    @Body() createAttendanceDto: CreateAttendanceDto,
  ): Promise<Attendance> {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Get()
  findAll(): Promise<Attendance[]> {
    return this.attendanceService.findAll();
  }
}
