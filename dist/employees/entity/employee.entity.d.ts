import { Attendance } from '../../attendance/entity/attendance.entity';
export declare class Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
    attendances: Attendance[];
}
