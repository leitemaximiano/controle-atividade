import { Router } from "express";

import { createTaskController } from "./user-cases/create-task";
import { listTaskController } from "./user-cases/list-task";

const router = Router();

router.post('/tasks', function(request, response) {
    return createTaskController.handler(request, response);
});

router.get('/tasks', function(request, response) {
    return listTaskController.handler(request, response);
});

export { router };