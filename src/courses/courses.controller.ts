import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CoursesService } from './courses.service';
import { CreateCoursesDto } from './dto/CreateCourses.dto';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateCoursesDto) {
    return this.coursesService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Get()
  async getCoursees(@Query('courseId') courseId: string) {
    if (courseId == null) {
      return await this.coursesService.findAll();
    } else {
      return await this.coursesService.findById(courseId);
    }
  }
}
