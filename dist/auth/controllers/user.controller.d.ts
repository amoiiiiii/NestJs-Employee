import { UsersService } from '../services/users.service';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
import { User } from '../entity/user.entity';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: CredentialsDTO): Promise<User>;
}
