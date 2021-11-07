import { Task } from "../../entities/task";
import { MemoryRepository } from "../../repository/impremetation/MemoryRespository";

class ListTaskUseCase {
    constructor (
        private readonly taskRepository: MemoryRepository
    ) {}

    async execute(): Promise<Array<Task>> {
        const result = await this.taskRepository.getAll();
        return result
    }
}

export { ListTaskUseCase };