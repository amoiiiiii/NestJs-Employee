import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entities/employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column({ unique: true })
  email: string;

  @Column()
  role: string;

  // Relasi opsional ke Employee
  @ManyToOne(() => Employee, (employee) => employee.users, { nullable: true })
  employee?: Employee;
}
