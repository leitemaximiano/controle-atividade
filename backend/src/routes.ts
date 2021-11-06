import { Router } from "express";

import { createTaskController } from "./user-cases/create-task";

const router = Router();

router.post('/tasks', function(request, response) {
    return createTaskController.handler(request, response);
});

export { router };