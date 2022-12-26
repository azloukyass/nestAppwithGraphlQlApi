import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {TasksService} from './tasks.service';
import {Tasks} from '../mocks/tasks.mock';
import {TaskDto} from '../dto/taskDto';


@Resolver('Tasks')
export class TasksResolver {
    constructor(
        private readonly taskService: TasksService
    ) {}

    @Query(type => [Tasks])
    async getTasks() {
        return this.taskService.getTasks();
    }

    @Query(type => Tasks)
    async getTask(
        @Args('id') id: number,
    ) {
        return this.taskService.getTask(id);
    }

    @Mutation(type => [Tasks])
    async addTask(
        @Args('task') task: TaskDto,
    ) {
        return this.taskService.addTask(task);
    }

    @Mutation(type => [Tasks])
    async deleteTask(
        @Args('id') id: number,
    ) {
        return this.taskService.deleteTask(id);
    }
}
