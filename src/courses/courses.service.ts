import { Injectable } from '@nestjs/common';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { InjectModel } from 'nestjs-typegoose';
import { CoursesModel } from './courses.model';
import { CreateCoursesDto } from './dto/CreateCourses.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(CoursesModel)
    private readonly coursesModel: ModelType<CoursesModel>,
  ) {}

  async create(dto: CreateCoursesDto) {
    return this.coursesModel.create(dto);
  }

  async getCourses() {
    return this.coursesModel.find().exec();
  }
}
