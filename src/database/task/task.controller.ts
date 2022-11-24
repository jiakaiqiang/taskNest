import { Controller, Get } from '@nestjs/common';
import { TaskService } from './task.service';
import { TaskEntity } from 'src/entities/task.entity';

@Controller('task')
export class TaskController {
  constructor(private readonly taskService: TaskService) { }

  @Get('list')
  findAll(): Promise<TaskEntity[]> {
    return this.taskService.findAll()
  }
}
