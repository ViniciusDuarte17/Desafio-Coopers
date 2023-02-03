import express from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { TaskController } from "../controller/TaskController";
import { TaskDataBase } from "../data/TaskDataBase";

import { IdGeneration } from "../services/IdGenerations";
export const taskRouter = express.Router();
const idGeneration: IdGeneration = new IdGeneration();
const taskDataBase: TaskDataBase = new TaskDataBase();
const taskBusiness: TaskBusiness = new TaskBusiness(idGeneration, taskDataBase);
const taskController: TaskController = new TaskController(taskBusiness);

taskRouter.get("/", (req, res) => taskController.allTaskController(req, res));
taskRouter.post("/", (req, res) =>
  taskController.createTaskController(req, res)
);

taskRouter.put("/:id", (res, req) => 
taskController.updateTaskController(res,req));

taskRouter.delete("/delete/:id", (req, res) =>
  taskController.deleteTaskController(req, res)
);
