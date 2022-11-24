import { Controller, Get,Query } from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/entities/user.entity';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Get('list')
  findAll(@Query() query): Promise<UserEntity[]> {
    return this.userService.findAll();
  }
}
