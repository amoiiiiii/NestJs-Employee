import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Absence } from '../entity/absence.entity';
import { CreateAbsenceDto } from '../dtos/create-absence.dto';
import { UpdateAbsenceDto } from '../dtos/update-absence.dto';
import { Employee } from '../../employees/entity/employee.entity';

@Injectable()
export class AbsenceService {
  constructor(
    @InjectRepository(Absence)
    private readonly absenceRepository: Repository<Absence>,

    @InjectRepository(Employee)
    private readonly employeeRepository: Repository<Employee>,
  ) {}

  // Create absence
  async create(createAbsenceDto: CreateAbsenceDto): Promise<Absence> {
    const employee = await this.employeeRepository.findOne({
      where: { id: Number(createAbsenceDto.employeeId) },
    });

    if (!employee) {
      throw new NotFoundException('Employee not found');
    }

    const absence = this.absenceRepository.create({
      startDate: createAbsenceDto.startDate,
      endDate: createAbsenceDto.endDate,
      reason: createAbsenceDto.reason,
      employee,
    });

    return this.absenceRepository.save(absence);
  }

  // Get all absences
  async findAll(): Promise<Absence[]> {
    return this.absenceRepository.find({ relations: ['employee'] });
  }

  // Get absence by id
  async findOne(id: number): Promise<Absence> {
    const absence = await this.absenceRepository.findOne({
      where: { id },
      relations: ['employee'],
    });

    if (!absence) {
      throw new NotFoundException(`Absence with ID ${id} not found`);
    }

    return absence;
  }

  async update(
    id: number,
    updateAbsenceDto: UpdateAbsenceDto,
  ): Promise<Absence> {
    const absence = await this.findOne(id); // Check if absence exists
    if (updateAbsenceDto.employeeId) {
      const employee = await this.employeeRepository.findOne({
        where: { id: Number(updateAbsenceDto.employeeId) },
      });
      if (!employee) {
        throw new NotFoundException('Employee not found');
      }
      absence.employee = employee;
    }
    absence.startDate = updateAbsenceDto.startDate || absence.startDate;
    absence.endDate = updateAbsenceDto.endDate || absence.endDate;
    absence.reason = updateAbsenceDto.reason || absence.reason;

    return this.absenceRepository.save(absence);
  }

  // Delete absence
  async remove(id: number): Promise<void> {
    const absence = await this.findOne(id); // Check if absence exists
    await this.absenceRepository.remove(absence);
  }
}
