import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  @ApiProperty({
    description: 'The unique ID of the attendance record',
    example: 1,
  })
  id: number;

  @Column({ type: 'date' })
  @ApiProperty({
    description: 'The date of the attendance (YYYY-MM-DD)',
    example: '2024-10-17',
  })
  date: string;

  @Column({ type: 'time' })
  @ApiProperty({
    description: 'The time when the employee checked in (HH:MM:SS)',
    example: '08:30:00',
  })
  timeIn: string;

  @Column({ type: 'time', nullable: true })
  @ApiProperty({
    description: 'The time when the employee checked out (HH:MM:SS)',
    example: '17:00:00',
  })
  timeOut: string;

  @ManyToOne(() => Employee, (employee) => employee.attendances)
  @ApiProperty({
    description: 'The employee who attended',
    type: () => Employee,
  })
  employee: Employee;
}
