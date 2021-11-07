import { TaskTypes } from './create-task-dto';
import { MemoryRepository } from '../../repository/impremetation/MemoryRespository';
import { Task } from '../../entities/task';


class CreateTaskUseCase {
    constructor (
        private readonly repository: MemoryRepository
    ) {}

    async execute(data: TaskTypes) {
        await this.repository.save(new Task(data));
    }
}

export { CreateTaskUseCase };
