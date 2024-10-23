import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AttendanceService } from './service/attendance.service';
import { AttendanceController } from './controllers/attendance.controller';
import { Attendance } from './entities/attendance.entity';
import { Employee } from '../employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Attendance, Employee])],
  controllers: [AttendanceController],
  providers: [AttendanceService],
})
export class AttendanceModule {}
