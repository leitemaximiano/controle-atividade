import { memoryRespository } from "../create-task";
import { ListTaskUseCase } from "./list-task-use-case";
import { ListTaskController } from "./list-task-controller";

const listTaskUseCase = new ListTaskUseCase(memoryRespository);
const listTaskController = new ListTaskController(listTaskUseCase);

export { listTaskController, listTaskUseCase };