import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';
import { CreateEmployeeDto } from '../dtos/employee-create.dto';
import { UpdateEmployeeDto } from '../dtos/employee-update.dto';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Create a new employee
  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    // Map CreateEmployeeDto to Employee entity
    const employee = this.employeeRepository.create(createEmployeeDto);
    return this.employeeRepository.save(employee);
  }

  // Get all employees
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // Get employee by ID
  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne({
      where: { id: Number(id) },
    });
  }

  // Update employee by ID
  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    // Find the existing employee
    const employee = await this.employeeRepository.findOne({
      where: { id: Number(id) },
    });

    if (!employee) {
      // Handle error if employee not found
      throw new Error('Employee not found');
    }

    // Map the DTO properties to the existing entity
    Object.assign(employee, updateEmployeeDto);

    // Save updated employee
    return this.employeeRepository.save(employee);
  }

  // Delete employee by ID
  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
