import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from './employee.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Create a new employee
  async create(employee: Employee): Promise<Employee> {
    return this.employeeRepository.save(employee);
  }

  // Get all employees
  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  // Get employee by ID
  async findOne(id: string): Promise<Employee> {
    return this.employeeRepository.findOne({ where: { id: Number(id) } });
  }

  // Update employee by ID
  async update(id: string, employee: Employee): Promise<Employee> {
    await this.employeeRepository.update(id, employee);
    return this.findOne(id);
  }

  // Delete employee by ID
  async remove(id: string): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
