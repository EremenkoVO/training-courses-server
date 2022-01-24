import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CreateProfileDto } from './dto/createProfile.dto';
import { ProfileModel } from './profile.model';

@Injectable()
export class ProfileService {
  constructor(
    @InjectModel(ProfileModel)
    private readonly profileModel: ModelType<ProfileModel>,
  ) {}

  async create(dto: CreateProfileDto) {
    return this.profileModel.create(dto);
  }

  async updateById(id: string, dto: CreateProfileDto) {
    return this.profileModel.findByIdAndUpdate(id, dto, { new: true }).exec();
  }

  async findByEmail(email: string) {
    return this.profileModel.findOne({ email }).exec();
  }
}
