import { IsArray, IsString } from 'class-validator';

export class CreateForumDto {
  @IsString()
  name: string;

  @IsString()
  author: string;

  @IsArray()
  branches: any[];
}
