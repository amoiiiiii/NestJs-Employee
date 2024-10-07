import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CredentialsDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsNumber() // Change to @IsNumber() if employeeId is supposed to be a number
  @IsNotEmpty()
  employeeId: number; // Change to number if it should be a number
}
