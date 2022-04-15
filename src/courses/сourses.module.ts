import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { CoursesController } from './courses.controller';
import { CoursesModel } from './courses.model';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: CoursesModel,
        schemaOptions: {
          collection: 'Courses',
        },
      },
    ]),
  ],
  providers: [CoursesService],
})
export class CoursesModule {}
