import { Employee } from '../../employees/entity/employee.entity';
export declare class Attendance {
    id: number;
    date: string;
    timeIn: string;
    timeOut: string;
    employee: Employee;
}
