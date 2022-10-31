//编写数据库的查询类
import {Column ,Entity,PrimaryGeneratedColumn,BaseEntity}  from 'typeorm'
@Entity('')
export class UserEntity extends BaseEntity{
    @PrimaryGeneratedColumn()
    id:number  //主键
    @Column({type:"varchar",name:"name"})
    name:string
}