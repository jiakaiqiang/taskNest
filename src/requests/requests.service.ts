import { Injectable,Req,Res,Request,Response} from '@nestjs/common';

@Injectable()
export class RequestsService {
   getData():string{
    
    return '我是测试的request 请求'
   }

}
