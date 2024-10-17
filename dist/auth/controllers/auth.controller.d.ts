import { AuthService } from '../services/auth.service';
import { LoginUserDTO } from '../dtos/login-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: LoginUserDTO): Promise<{
        access_token: string;
    }>;
}
