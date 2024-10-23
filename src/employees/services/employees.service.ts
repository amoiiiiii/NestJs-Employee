import {
  Injectable,
  NotFoundException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Employee } from '../entity/employee.entity';
import { CreateEmployeeDto } from '../dtos/employee-create.dto';
import { UpdateEmployeeDto } from '../dtos/employee-update.dto';
import { User } from 'src/auth/entity/user.entity';

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
        throw new BadRequestException('Hanya boleh ada satu super admin');
      }

      const employee = this.employeeRepository.create(createEmployeeDto);
      return this.employeeRepository.save(employee);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findAll(): Promise<Employee[]> {
    return this.employeeRepository.find();
  }

  async findOne(id: string): Promise<Employee> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(id) },
      });
      if (!employee) {
        throw new NotFoundException('Employee tidak ditemukan');
      }
      return employee;
    } catch (error) {
      throw new NotFoundException(error.message);
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
        throw new NotFoundException('Employee tidak ditemukan');
      }

      // Update properti employee
      Object.assign(employee, updateEmployeeDto);
      return this.employeeRepository.save(employee);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
  async remove(id: string): Promise<void> {
    try {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(id) },
      });
      if (!employee) {
        throw new NotFoundException('Employee tidak ditemukan');
      }

      await this.employeeRepository.delete(id);
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }
}
