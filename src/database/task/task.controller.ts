import { Controller, Get,Query,Post } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from 'src/entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get('list')
  findAll(): Promise<TaskEntity[]> {
    return this.taskService.findAll()   //调用的是service 中定义的函数
  }
  @Post('addTask')
  addTask(@Query() query): Promise<TaskEntity[]> {
    console.log(query,'query')
    // if(query.taskName==''){
      
     

    // }
    //这里要写一些字段的验证保证 插入的数据和数据库中的数据一致
    return this.taskService.addTask(query)   //调用的是service 中定义的函数
  }
}
