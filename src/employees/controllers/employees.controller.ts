import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import {
  ApiTags,
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';
import { EmployeesService } from '../services/employees.service';
import { CreateEmployeeDto } from '../dtos/employee-create.dto';
import { UpdateEmployeeDto } from '../dtos/employee-update.dto';
import { Employee } from '../entities/employee.entity';

@ApiTags('Employees')
@ApiBearerAuth()
@Controller('employees')
export class EmployeesController {
  constructor(private readonly employeesService: EmployeesService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new employee' })
  @ApiResponse({ status: 201, description: 'Employee created successfully.' })
  @ApiResponse({ status: 400, description: 'Bad Request.' })
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
  ): Promise<Employee> {
    try {
      return await this.employeesService.create(createEmployeeDto);
    } catch (error) {
      console.error(error); // Optionally log the error
      throw new BadRequestException(error.message);
    }
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get employee by ID' })
  @ApiResponse({ status: 200, description: 'Employee found.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  async findOne(@Param('id') id: string): Promise<Employee> {
    try {
      return await this.employeesService.findOne(id);
    } catch (error) {
      console.error(error); // Optionally log the error
      throw new NotFoundException('Employee not found');
    }
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update employee information' })
  @ApiResponse({ status: 200, description: 'Employee updated successfully.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    try {
      return await this.employeesService.update(id, updateEmployeeDto);
    } catch (error) {
      console.error(error); // Optionally log the error
      if (error.message === 'Employee tidak ditemukan') {
        throw new NotFoundException(error.message);
      }
      throw new BadRequestException(error.message);
    }
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete an employee' })
  @ApiResponse({ status: 200, description: 'Employee deleted successfully.' })
  @ApiResponse({ status: 404, description: 'Employee not found.' })
  async remove(@Param('id') id: string): Promise<void> {
    try {
      await this.employeesService.remove(id);
    } catch (error) {
      console.error(error); // Optionally log the error
      throw new NotFoundException('Employee tidak ditemukan');
    }
  }
}
