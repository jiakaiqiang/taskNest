import { Injectable } from '@nestjs/common';

@Injectable()
export class PostsService {
    getPosts():string{
        return '我是模块数据'
    }
}
