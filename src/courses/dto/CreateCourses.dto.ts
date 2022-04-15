import { IsString } from 'class-validator';

export class CreateCoursesDto {
  @IsString()
  name: string;
}
