import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { from } from 'rxjs';
import { CreateForumDto } from './dto/createForum.dto';
import { ForumModel } from './forum.model';

@Injectable()
export class ForumService {
  constructor(
    @InjectModel(ForumModel)
    private readonly forumModel: ModelType<ForumModel>,
  ) {}

  async create(dto: CreateForumDto) {
    return this.forumModel.create(dto);
  }

  async findAll() {
    return from(this.forumModel.find());
  }

  async findById(id: string) {
    return this.forumModel.findById(id);
  }

  async findByBranchId(id: string) {
    return this.forumModel;
  }
}
