import { AuthService } from '../services/auth.service';
import { CredentialsDTO } from '../dtos/credintial-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(body: CredentialsDTO): Promise<{
        access_token: string;
    }>;
}
