import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { EmployeesService } from '../services/employees.service';
import { CreateEmployeeDto } from '../dtos/employee-create.dto';
import { UpdateEmployeeDto } from '../dtos/employee-update.dto';
import { Employee } from '../entity/employee.entity';

@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  // Create a new employee
  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // Pass the DTO to service
    return this.employeesService.create(createEmployeeDto);
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
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    // Pass the DTO to service
    return this.employeesService.update(id, updateEmployeeDto);
  }

  // Delete employee by ID
  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.employeesService.remove(id);
  }
}
