import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class LoginUserDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber() // Include employeeId if it's necessary for login
  @IsNotEmpty()
  employeeId: number; // Keep this as number if it's a number
}
