
import { Controller, Get ,Req,Res,Request, Response} from '@nestjs/common';
import { RequestsService} from './requests.service';
@Controller('requests')
export class RequestsController {
    constructor(private readonly RequestsService: RequestsService) {}
    @Get()
    getData(): string {
      return this.RequestsService.getData();
    }

 

}


