import { MemoryRepository } from "../../repository/impremetation/MemoryRespository";
import { CreateTaskUseCase } from "./create-task-use-case";
import { CreateTaskController } from "./create-task-controller";

const memoryRespository = new MemoryRepository();

const createTaskUseCase = new CreateTaskUseCase(memoryRespository);

const createTaskController = new CreateTaskController(createTaskUseCase);

export { createTaskController, createTaskUseCase, memoryRespository };