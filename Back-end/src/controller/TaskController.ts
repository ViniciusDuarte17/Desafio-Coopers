import { Request, Response } from "express";
import { TaskBusiness } from "../business/TaskBusiness";
import { CustomError } from "../error/CustomError";
import { createTaskDTO, task } from "../types/typesTasks";

export class TaskController {
  constructor(private taskBussiness: TaskBusiness) {}
  createTaskController = async (req: Request, res: Response): Promise<void> => {
    const title = req.body.title;
    const status = req.body.status;

    const taskDTO: createTaskDTO = {
      title,
      status
    };
    try {
      await this.taskBussiness.createTaskBusiness(taskDTO);
      res.status(201).send({ message: "Tarefa criada com sucesso!" });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };

  updateTaskController = async(req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const status = Number(req.body.status);
        const task = await this.taskBussiness.allTaskBusiness();
        await this.taskBussiness.updateTaskBuniness(id, status);
        res.status(200).send({task});

    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };  

  deleteTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
      const id = req.params.id;
      await this.taskBussiness.deleteTaskBusiness(id);
      res.status(200).send({ message: "Tarefa excluída com sucesso!" });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };
  allTaskController = async (req: Request, res: Response): Promise<void> => {
    try {
      const task = await this.taskBussiness.allTaskBusiness();
      res.status(200).send({ task });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };
}
