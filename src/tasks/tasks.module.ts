import { Module } from '@nestjs/common';
import { TasksResolver } from './tasks.resolver';
import {Field, ID} from '@nestjs/graphql';
import { TasksService } from './tasks.service';

@Module({
  providers: [TasksResolver, TasksService]
})
export class TasksModule {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  completed: boolean;
}
