import { Controller, Get, Post, Body } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeesService.create(employee);
  }

  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }
}
