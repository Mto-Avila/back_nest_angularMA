import { IsEmail, IsNotEmpty, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @MinLength(6)
  @MaxLength(25)
  @IsNotEmpty()
  password: string;
}
