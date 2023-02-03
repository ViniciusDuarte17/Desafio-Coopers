import { ITaskBaseData } from "../interface/ITaskBaseData";

import { task } from "../types/typesTasks";
import { BaseDataBase } from "./BaseDataBase";

export class TaskDataBase extends BaseDataBase implements ITaskBaseData {
  private TABLE_NAME = "taskToDoList";

  async allTask(): Promise<task[]> {
    const tasks = await this.connection(this.TABLE_NAME);
    return tasks;
  }
  async taskById(id: string): Promise<task> {
    const tasks = await this.connection(this.TABLE_NAME).where({ id });
    return tasks[0];
  }

  async createTask(task: task): Promise<void> {

    await this.connection(this.TABLE_NAME).insert(task);
  }

  async updateTask(id: string, taskStatus: number): Promise<void> {
    await this.connection(this.TABLE_NAME)
    .where({ id })
    .update({status: taskStatus})
  }

  async deleteTask(id: string): Promise<void> {
    await this.connection(this.TABLE_NAME).delete().where({ id });
  }
}
