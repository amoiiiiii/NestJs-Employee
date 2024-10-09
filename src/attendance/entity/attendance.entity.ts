import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';

@Entity()
export class Attendance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  date: string;

  @Column({ type: 'time' })
  timeIn: string;

  @Column({ type: 'time', nullable: true })
  timeOut: string;

  // Relasi Many-to-One dengan Employee
  @ManyToOne(() => Employee, (employee) => employee.attendances)
  employee: Employee;
}
