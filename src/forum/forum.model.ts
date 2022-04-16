import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ForumModel extends Base {}
export class ForumModel extends TimeStamps {
  @prop()
  name: string;

  @prop()
  author: string;

  @prop()
  branches: any[];
}
