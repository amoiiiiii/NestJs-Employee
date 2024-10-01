import { IsString, IsNotEmpty } from 'class-validator';

export class CredentialsDTO {
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
