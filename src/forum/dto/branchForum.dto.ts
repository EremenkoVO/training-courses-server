import { IsArray, IsString } from 'class-validator';

export class branchForumDto {
  @IsString()
  name: string;
}
