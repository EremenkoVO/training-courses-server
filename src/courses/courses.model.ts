import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface CoursesModel extends Base {}
export class CoursesModel extends TimeStamps {
  @prop()
  name: string;
}
