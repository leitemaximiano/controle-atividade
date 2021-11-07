import { v4 as uuid } from 'uuid';

import { CreateTaskInterface } from '../create-task-interface';
import { TaskTypes } from '../../user-cases/create-task/create-task-dto';
import { ListTaskInterface } from '../list-task-interface';
import { Task } from '../../entities/task';

class MemoryRepository implements CreateTaskInterface, ListTaskInterface {
    private db: Task[] = []; 

    async save (task: Task): Promise<void> {
        this.db.push(task);
        console.log(this.db);
    }

    async getAll(): Promise<Array<Task>> {
        return this.db;
    }
}

export { MemoryRepository };
