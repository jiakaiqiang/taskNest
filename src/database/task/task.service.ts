import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from '../../entities/task.entity';

@Injectable()
export class TaskService {
  // 使用InjectRepository装饰器并引入Repository这样就可以使用typeorm的操作了
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) { }
  // 获取所有用户数据列表(userRepository.query()方法属于typeoram)
  async findAll(): Promise<TaskEntity[]> {
    return await this.taskRepository.query('select * from task');
  }
  //插入
  async insert(): Promise<TaskEntity[]> {
    return await this.taskRepository.query('select * from task');
  }
}