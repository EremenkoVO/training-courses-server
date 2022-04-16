import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ForumController } from './forum.controller';
import { ForumModel } from './forum.model';
import { ForumService } from './forum.service';

@Module({
  controllers: [ForumController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ForumModel,
        schemaOptions: {
          collection: 'Forum',
        },
      },
    ]),
  ],
  providers: [ForumService],
})
export class ForumModule {}
