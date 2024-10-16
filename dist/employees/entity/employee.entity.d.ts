import { Attendance } from '../../attendance/entity/attendance.entity';
import { Absence } from '../../absences/entity/absence.entity';
export declare class Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
    attendances: Attendance[];
    absences: Absence[];
}
