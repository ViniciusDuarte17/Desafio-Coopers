import { task } from "../types/typesTasks";

export interface ITaskBaseData {
  allTask(): Promise<task[]>;
  taskById(id: string): Promise<task>;
  createTask(createTask: task): Promise<void>;
  updateTask(id: string, taskStatus: number): Promise<void>
  deleteTask(id: string): Promise<void>;
}
