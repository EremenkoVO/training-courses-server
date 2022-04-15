import { prop } from '@typegoose/typegoose';
import { Base, TimeStamps } from '@typegoose/typegoose/lib/defaultClasses';

export interface ProfileModel extends Base {}
export class ProfileModel extends TimeStamps {
  @prop()
  image: string;

  @prop()
  email: string;

  @prop()
  firstName: string;

  @prop()
  secondName: string;

  @prop()
  age: number;
}
