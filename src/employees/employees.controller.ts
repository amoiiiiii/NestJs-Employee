import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  // Create a new employee
  @Post()
  create(@Body() employee: Employee): Promise<Employee> {
    return this.employeesService.create(employee);
  }

  // Get all employees
  @Get()
  findAll(): Promise<Employee[]> {
    return this.employeesService.findAll();
  }

  // Get employee by ID
  @Get(':id')
  findOne(@Param('id') id: string): Promise<Employee> {
    return this.employeesService.findOne(id);
  }

  // Update employee by ID
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() employee: Employee,
  ): Promise<Employee> {
    return this.employeesService.update(id, employee);
  }

  // Delete employee by ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.employeesService.remove(id);
  }
}
