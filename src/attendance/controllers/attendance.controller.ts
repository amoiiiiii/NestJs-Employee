import { Controller, Get, Post, Body } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AttendanceService } from '../service/attendance.service';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { Attendance } from '../entity/attendance.entity';

@ApiTags('Attendances')
@Controller('attendances')
export class AttendanceController {
  constructor(private readonly attendanceService: AttendanceService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new attendance record' })
  @ApiResponse({
    status: 201,
    description: 'Attendance record created successfully.',
  })
  @ApiResponse({
    status: 400,
    description: 'Bad Request.',
  })
  create(
    @Body() createAttendanceDto: CreateAttendanceDto,
  ): Promise<Attendance> {
    return this.attendanceService.create(createAttendanceDto);
  }

  @Get()
  @ApiOperation({ summary: 'Get all attendance records' })
  @ApiResponse({
    status: 200,
    description: 'List of attendance records.',
  })
  findAll(): Promise<Attendance[]> {
    return this.attendanceService.findAll();
  }
}
