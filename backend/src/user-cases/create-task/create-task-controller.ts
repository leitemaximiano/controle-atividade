import { Request, Response} from 'express';
import { CreateTaskUseCase } from './create-task-use-case';


class CreateTaskController {
    constructor (
        private createTaskUseCase: CreateTaskUseCase
    ){}

    async handler (request: Request, response: Response): Promise<Response> {
        const {
            name,
            body,
            status,
            tags
        } = request.body;

        await this.createTaskUseCase.execute({name, body, status, tags});
        return response.status(201).send();
    }
}

export { CreateTaskController };
