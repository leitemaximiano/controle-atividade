import { Task } from "../entities/task";


interface CreateTaskInterface {
    save(task: Task) : Promise<void>
}

export { CreateTaskInterface };
