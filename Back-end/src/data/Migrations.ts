import { BaseDataBase } from "./BaseDataBase";
import dotenv from "dotenv";
dotenv.config();
export class CreateTable extends BaseDataBase {
  createTables = () =>
    this.connection
      .raw(
        `
        CREATE TABLE IF NOT EXISTS userTask(
          id VARCHAR(255) primary KEY,
          email VARCHAR(255) NOT NULL,
          user VARCHAR(255) NOT NULL,
          password VARCHAR(255) NOT NULL  
      );
        CREATE TABLE IF NOT EXISTS taskToDoList(
            id VARCHAR(255) primary KEY,
            title VARCHAR(255) NOT NULL,
            status Boolean NOT NULL DEFAULT false
        );
        
    `
      )
      .then(() => console.log("Tabela criada com sucesso"))
      .catch((error: any) => console.log(error.sqlMessage || error.message));
  closeConnection = () => this.connection.destroy();
}

const createTable = new CreateTable();
createTable.createTables().finally(createTable.closeConnection);
