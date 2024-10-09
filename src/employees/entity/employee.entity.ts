import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attendance } from '../../attendance/entity/attendance.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column('decimal') // Untuk menyimpan angka desimal
  salary: number;

  // Relasi One-to-Many dengan Attendance
  @OneToMany(() => Attendance, (attendance) => attendance.employee)
  attendances: Attendance[];
}
