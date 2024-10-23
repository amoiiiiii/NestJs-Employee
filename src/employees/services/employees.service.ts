import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entities/employee.entity';
import { CreateEmployeeDto } from '../dtos/employee-create.dto';
import { UpdateEmployeeDto } from '../dtos/employee-update.dto';
import { User } from 'src/auth/entities/user.entity';

@Injectable()
export class EmployeesService {
  constructor(
    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      const superAdmin = await this.userRepository.findOne({
        where: { role: 'super_admin' },
      });
      if (superAdmin) {
        throw new BadRequestException('There can only be one super admin');
      }
      const employee = this.employeeRepository.create({
        ...createEmployeeDto,
        role: createEmployeeDto.role || 'employee',
      });

      return await this.employeeRepository.save(employee);
    } catch (error) {
      console.error('Error creating employee:', error);
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Employee[]> {
    try {
      return await this.employeeRepository.find();
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw new BadRequestException('Could not fetch employees');
    }
  }

  async findOne(id: string): Promise<Employee> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(id) },
      });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      return employee;
    } catch (error) {
      console.error('Error finding employee:', error);
      throw new NotFoundException('Employee not found');
    }
  }

  async update(
    id: string,
    updateEmployeeDto: UpdateEmployeeDto,
  ): Promise<Employee> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(id) },
      });

      if (!employee) {
        throw new NotFoundException('Employee not found');
      }

      Object.assign(employee, updateEmployeeDto);
      return await this.employeeRepository.save(employee);
    } catch (error) {
      console.error('Error updating employee:', error);
      throw new BadRequestException(error.message);
    }
  }

  async remove(id: string): Promise<void> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(id) },
      });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }

      await this.employeeRepository.delete(id);
    } catch (error) {
      console.error('Error deleting employee:', error);
      throw new BadRequestException(error.message);
    }
  }
}
