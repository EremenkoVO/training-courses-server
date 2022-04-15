import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypegooseModule } from 'nestjs-typegoose';
import { AuthModule } from './auth/auth.module';
import { getMongoConfig } from './configs/mongo.config';
import { CoursesModule } from './courses/Courses.module';
import { ProfileModule } from './profile/profile.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: getMongoConfig,
    }),
    AuthModule,
    ProfileModule,
    CoursesModule,
  ],
})
export class AppModule {}
