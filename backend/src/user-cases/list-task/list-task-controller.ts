import { Request, Response } from "express";
import { ListTaskUseCase } from "./list-task-use-case";


class ListTaskController {
    constructor (
        private readonly listTaskUseCase: ListTaskUseCase
    ) {}

    async handler (request: Request, response: Response): Promise<Response> {
        const result = await this.listTaskUseCase.execute();
        return response.status(200).json(result);
    }
}

export { ListTaskController };