import { UsersService } from '../services/users.service';
import { JwtService } from '@nestjs/jwt';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
import { LoginUserDTO } from '../dtos/login-user.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(credentials: CredentialsDTO): Promise<any>;
    login(loginDto: LoginUserDTO): Promise<{
        access_token: string;
    }>;
}
