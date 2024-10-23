import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Absence {
  @ApiProperty({ example: 1, description: 'Unique identifier for the absence' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({
    example: '2024-01-01',
    description: 'The start date of the absence',
  })
  @Column({ type: 'date' })
  startDate: string;

  @ApiProperty({
    example: '2024-01-05',
    description: 'The end date of the absence',
  })
  @Column({ type: 'date' })
  endDate: string;

  @ApiProperty({
    example: 'Medical leave',
    description: 'The reason for the absence',
  })
  @Column()
  reason: string;

  @ApiProperty({
    description: 'The employee taking the absence',
    type: () => Employee,
  })
  @ManyToOne(() => Employee, (employee) => employee.absences)
  employee: Employee;
}
