import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Attendance } from './entity/attendance.entity';
import { CreateAttendanceDto } from '../attendance/dtos/create-attendance.dto';
import { Employee } from '../../src/employees/entity/employee.entity';

@Injectable()
export class AttendanceService {
  constructor(
    @InjectRepository(Attendance)
    private readonly attendanceRepository: Repository<Attendance>,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  async create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance> {
    const employee = await this.employeeRepository.findOne({
      where: { id: Number(createAttendanceDto.employeeId) },
    });

    if (!employee) {
      throw new Error('Employee not found');
    }

    const attendance = this.attendanceRepository.create({
      date: createAttendanceDto.date,
      timeIn: createAttendanceDto.timeIn,
      timeOut: createAttendanceDto.timeOut,
      employee,
    });

    return this.attendanceRepository.save(attendance);
  }

  async findAll(): Promise<Attendance[]> {
    return this.attendanceRepository.find({ relations: ['employee'] });
  }
}
