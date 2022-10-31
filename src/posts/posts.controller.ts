import { Controller, Get } from '@nestjs/common';
import { PostsService} from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(private readonly PostsService: PostsService) {}
    @Get()
    Posts(): string {
      return this.PostsService.getPosts();
    }

}
