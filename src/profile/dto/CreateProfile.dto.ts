import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  image: string;

  @IsEmail()
  email: string;

  @IsString()
  firstName: string;

  @IsString()
  secondName: string;

  @IsNumber()
  age: number;
}
