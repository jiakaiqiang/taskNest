import { Controller, Get,Post,Request } from '@nestjs/common';
import { AppService} from './app.service';

@Controller('app')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}



// @Controller('users')
// export class userController {
//   constructor(private readonly userService: userService) {}

//   @Post('getuserName')
//   getUserName(@Request() req): object {
//     return this.userService.getAssignUserName(req);
//   }
// }
