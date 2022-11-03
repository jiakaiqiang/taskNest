import { Module } from '@nestjs/common';
import { AppController,userController } from './app.controller';
import { AppService,userService} from './app.service';
import { PostsModule } from './posts/posts.module';
import { RequestsModule } from './requests/requests.module';
import {TypeOrmModule}  from '@nestjs/typeorm'
//子模块加载
import {UserModule} from './database/user/user.modules'
console.log(__dirname,'we')
//数据库的配置信息
@Module({
  imports: [PostsModule, RequestsModule,
   // 加载连接数据库
   TypeOrmModule.forRoot({
    type: 'mysql', // 数据库类型
    host: '120.25.146.242', // 数据库ip地址
    port: 3306, // 端口
    username: 'root', // 登录名
    password: '123456', // 密码
    database:'taskDataBase', // 数据库名称
    entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
    migrationsRun: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用)
  }),
  // 加载子模块
  UserModule,

  
  ],
  controllers: [AppController,userController],
  providers: [AppService,userService],
})
export class AppModule {}
