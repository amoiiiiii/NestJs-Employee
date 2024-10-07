import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';
import { Employee } from '../../employees/entity/employee.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;

  @OneToOne(() => Employee, { nullable: true })
  @JoinColumn()
  employee: Employee | null;

  @Column({ nullable: true })
  employeeId?: number;
}
