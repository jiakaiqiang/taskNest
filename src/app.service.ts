import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}




@Injectable()
export class userService {
  getUserName(): string {
    return '你好用户';
  }
 getAssignUserName(req:any):Object{
   console.log(req)
    return {

    }
 } 
}
