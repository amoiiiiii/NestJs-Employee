import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attendance } from '../../attendance/entity/attendance.entity';
import { Absence } from '../../absences/entity/absence.entity';
import { User } from '../../auth/entity/user.entity';

@Entity()
export class Employee {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  position: string;

  @Column('decimal')
  salary: number;

  @Column()
  role: string;

  @OneToMany(() => Attendance, (attendance) => attendance.employee)
  attendances: Attendance[];

  @OneToMany(() => Absence, (absence) => absence.employee)
  absences: Absence[];

  // Tambahkan relasi ke entitas User
  @OneToMany(() => User, (user) => user.employee)
  users: User[];
}
