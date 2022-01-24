import {
  Body,
  Controller,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt.guard';
import { CreateProfileDto } from './dto/CreateProfile.dto';
import { ProfileService } from './profile.service';
import { IdValidationPipe } from 'src/pipes/id-validation.pipe';
import { ProfileModel } from './profile.model';
import { PROFILE_NOT_FOUND_ERROR } from './dto/profile.constants';

@Controller('profile')
export class ProfileController {
  constructor(private readonly profileService: ProfileService) {}

  @UseGuards(JwtAuthGuard)
  @UsePipes(new ValidationPipe())
  @Post('create')
  async creat(@Body() dto: CreateProfileDto) {
    return this.profileService.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Get('email')
  async get(email: string) {
    const profile = await this.profileService.findByEmail(email);
    if (!profile) {
      throw new NotFoundException(PROFILE_NOT_FOUND_ERROR);
    }
    return profile;
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  async patch(
    @Param('id', IdValidationPipe) id: string,
    @Body() dto: ProfileModel,
  ) {
    const updateProfile = await this.profileService.updateById(id, dto);
    if (!updateProfile) {
      throw new NotFoundException(PROFILE_NOT_FOUND_ERROR);
    }
    return updateProfile;
  }
}
