import {HttpException, Injectable} from '@nestjs/common';
import {Tasks} from '../mocks/tasks.mock';
import {TaskDto} from '../dto/taskDto';

@Injectable()
export class TasksService {
    tasks = Tasks;

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        return this.tasks.find(task => Number(task.id) === id);
    }

    async addTask(taskAdd: TaskDto) {
        const lastTask = this.tasks.slice(-1).pop();
        const task:  any = {
            id: lastTask.id + 1,
            title: taskAdd.title,
            description: taskAdd.description,
            completed: false,
        };

        this.tasks.push(task);
        return this.tasks;
    }

    deleteTask(id: number) {
        const taskIndex = this.tasks.findIndex(item => item.id === id);
        if (taskIndex === -1) {
            throw new HttpException('Task not found', 404);
        }

        this.tasks.splice(taskIndex, 1);
        return this.tasks;
    }
}
