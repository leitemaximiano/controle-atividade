import { v4 as uuid } from 'uuid';

import { CreateTaskInterface } from '../create-task-interface';
import { TaskTypes } from '../../user-cases/create-task/create-task-dto';

class MemoryRepository implements CreateTaskInterface {
    private db: TaskTypes[] = []; 

    async save (task: TaskTypes): Promise<void> {
        task.id = task.id || uuid();
        this.db.push(task);
    }
}

export { MemoryRepository };
