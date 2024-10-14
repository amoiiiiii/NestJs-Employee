import { Repository } from 'typeorm';
import { Attendance } from '../entity/attendance.entity';
import { CreateAttendanceDto } from '../dtos/create-attendance.dto';
import { Employee } from '../../employees/entity/employee.entity';
export declare class AttendanceService {
    private readonly attendanceRepository;
    private readonly employeeRepository;
    constructor(attendanceRepository: Repository<Attendance>, employeeRepository: Repository<Employee>);
    create(createAttendanceDto: CreateAttendanceDto): Promise<Attendance>;
    findAll(): Promise<Attendance[]>;
}
