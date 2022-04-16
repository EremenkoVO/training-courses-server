import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateForumDto } from './dto/createForum.dto';
import { ForumService } from './forum.service';

@Controller('forum')
export class ForumController {
  constructor(private readonly forumService: ForumService) {}

  @UsePipes(new ValidationPipe())
  @Post('create')
  async create(@Body() dto: CreateForumDto) {
    return this.forumService.create(dto);
  }

  @UsePipes(new ValidationPipe())
  @Get()
  async find(@Query('forumId') forumId: string) {
    if (forumId == null) {
      return this.forumService.findAll();
    } else {
      return this.forumService.findById(forumId);
    }
  }

  @UsePipes(new ValidationPipe())
  @Get(':forumId/')
  async findAllBranches(@Query('brachId') branchId: string) {
    const brach = await this.forumService.findByBranchId(branchId);
    if (!brach) {
      throw new NotFoundException();
    }
  }
}
