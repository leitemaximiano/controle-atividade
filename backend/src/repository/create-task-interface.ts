import { TaskTypes } from '../user-cases/create-task/create-task-dto';

interface CreateTaskInterface {
    save(task: TaskTypes) : Promise<void>
}

export { CreateTaskInterface };
