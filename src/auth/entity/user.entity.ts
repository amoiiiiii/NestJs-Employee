import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @ManyToOne(() => Employee, (employee) => employee.users)
  employee: Employee;
}
