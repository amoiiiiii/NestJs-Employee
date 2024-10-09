// src/employees/employees.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeesController } from '../employees/controllers/employees.controller'; // Update this path as necessary
import { EmployeesService } from './services/employees.service';
import { Employee } from './entity/employee.entity';
import { UsersModule } from '../auth/users.module'; // Adjust the path to UsersModule

@Module({
  imports: [
    TypeOrmModule.forFeature([Employee]),
    UsersModule, // Import UsersModule here
  ],
  controllers: [EmployeesController],
  providers: [EmployeesService],
  exports: [EmployeesService],
})
export class EmployeesModule {}
