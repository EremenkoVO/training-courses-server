import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { ProfileModel } from './profile.model';

@Injectable
export class ProfileService {
  constructor(
    @InjectModel(ProfileModel)
    private readonly profileModel: ModelType<ProfileModel>,
  ) {}
}
