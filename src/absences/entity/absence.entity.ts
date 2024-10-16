import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';

@Entity()
export class Absence {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  startDate: string;

  @Column({ type: 'date' })
  endDate: string;

  @Column()
  reason: string;

  // Relasi Many-to-One dengan Employee
  @ManyToOne(() => Employee, (employee) => employee.absences)
  employee: Employee;
}
