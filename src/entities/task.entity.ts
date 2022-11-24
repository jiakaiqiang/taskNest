//编写数据库的查询类
import {Column ,Entity,PrimaryGeneratedColumn,BaseEntity}  from 'typeorm'
@Entity('')
export class TaskEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number  //主键
    @Column({type:"varchar",name:"taskName"})//定义字段的类型,同时定义字段查询，插入时候的类型,
    taskName:string
    @Column({type:"varchar",name:"taskDesc"})
    taskDesc:string
    @Column({type:"datetime",name:"taskCreateTime"})
    taskCreateTime:Date
    @Column({type:"datetime",name:"taskEndTime"})
    taskEndTime:Date
    @Column({type:"varchar",name:"taskDutyPerson"})
    taskDutyPerson:string
    @Column({type:"varchar",name:"taskSatus"})
    taskSatus:string
    @Column({type:"varchar",name:"isRemove"})
    isRemove:string

}