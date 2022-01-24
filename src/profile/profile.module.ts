import { Module } from '@nestjs/common';
import { TypegooseModule } from 'nestjs-typegoose';
import { ProfileController } from './profile.controller';
import { ProfileService } from './profile.service';
import { ProfileModel } from './profile.model';

@Module({
  controllers: [ProfileController],
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: ProfileModel,
        schemaOptions: {
          collection: 'Profile',
        },
      },
    ]),
  ],
  providers: [ProfileService],
})
export class ProductModule {}
