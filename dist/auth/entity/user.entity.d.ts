import { Employee } from '../../employees/entity/employee.entity';
export declare class User {
    id: number;
    username: string;
    password: string;
    employee: Employee | null;
    employeeId?: number;
}
