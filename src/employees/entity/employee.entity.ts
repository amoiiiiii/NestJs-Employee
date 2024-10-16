import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Attendance } from '../../attendance/entity/attendance.entity';
import { Absence } from '../../absences/entity/absence.entity'; // Tambahkan impor untuk Absence

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

  // Relasi One-to-Many dengan Absence
  @OneToMany(() => Absence, (absence) => absence.employee)
  absences: Absence[]; // Tambahkan relasi untuk Absences
}
