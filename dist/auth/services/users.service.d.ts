import { Repository } from 'typeorm';
import { User } from '../entity/user.entity';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
import { Employee } from '../../employees/entity/employee.entity';
export declare class UsersService {
    private readonly userRepository;
    private readonly employeeRepository;
    constructor(userRepository: Repository<User>, employeeRepository: Repository<Employee>);
    create(createUserDto: CredentialsDTO): Promise<User>;
    findByUsername(username: string): Promise<User | undefined>;
}
