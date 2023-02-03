import { CustomError } from "../error/CustomError";
import { ITaskBaseData } from "../interface/ITaskBaseData";

import { IdGeneration } from "../services/IdGenerations";
import { createTaskDTO, task } from "../types/typesTasks";

export class TaskBusiness {
  constructor(
    private idGeneration: IdGeneration,
    private taskDataBase: ITaskBaseData
  ) {}
  createTaskBusiness = async (taskDTO: createTaskDTO): Promise<void> => {
    const title = taskDTO.title;
    let status = taskDTO.status;

    if(status === 0){
      status = 0
    }
    if(status === 1) {
      status = 1
    }
    if(status !== 0 && status !== 1) {
      status = 0
    }
    
    if (!title) {
      throw new CustomError(
        "Por favor preencha o 'titulo' da tarefa",
        422
      );
    }
    const id = this.idGeneration.generateId();
    const task: task = {
      id,
      title,
      status
    };

    await this.taskDataBase.createTask(task);
  };

  updateTaskBuniness = async (id: string, taskStatus: number): Promise<task[]> => {
    
    if (!id) {
      throw new CustomError(
        "É preciso informar o id da tarefa que deseja atualizar!",
        422
      );
    }
    const verifyExitTask = await this.taskDataBase.taskById(id);

    if (!verifyExitTask) {
      throw new CustomError("Essa tarefa não existe", 404);
    }

    if(taskStatus === 0 || taskStatus === undefined) {
      taskStatus = 1
    }

    await this.taskDataBase.updateTask(id, taskStatus)

    const alltask = await this.taskDataBase.allTask();
    return alltask;
  }

  deleteTaskBusiness = async (id: string): Promise<void> => {
    if (!id[3]) {
      throw new CustomError(
        "É preciso informar o id da tarefa que deseja deletar!",
        422
      );
    }
    const verifyExitTask = await this.taskDataBase.taskById(id);

    if (!verifyExitTask) {
      throw new CustomError("Essa tarefa não existe", 404);
    }

    await this.taskDataBase.deleteTask(id);
  };
  allTaskBusiness = async (): Promise<task[]> => {
    const alltask = await this.taskDataBase.allTask();
    return alltask;
  };
}
