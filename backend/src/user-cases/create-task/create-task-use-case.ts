import { TaskTypes } from './create-task-dto';
import { MemoryRepository } from '../../repository/impremetation/MemoryRespository';


class CreateTaskUseCase {
    constructor (
        private readonly repository: MemoryRepository
    ) {}

    async execute(data: TaskTypes) {
        await this.repository.save(data);
    }
}

export { CreateTaskUseCase };
