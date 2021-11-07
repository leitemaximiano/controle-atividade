import { Task } from "../entities/task";


interface ListTaskInterface {
    getAll () : Promise<Array<Task>>
}

export { ListTaskInterface };