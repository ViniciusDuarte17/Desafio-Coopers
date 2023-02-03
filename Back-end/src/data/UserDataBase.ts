import { IUserBaseData } from "../interface/IUserBaseData";
import { userDateDTO } from "../types/user";
import { BaseDataBase } from "./BaseDataBase";

export class UserDataBase extends BaseDataBase implements IUserBaseData {
  private TABLE_NAME = "userTask";

  async singUp(user: userDateDTO): Promise<void> {
  
    await this.connection(this.TABLE_NAME).insert(user);
  }
  async getUser(user: string): Promise<userDateDTO> {
    const userDB = await this.connection()
      .select("*")
      .from(this.TABLE_NAME)
      .where({ id: user });
    return userDB[0];
  }
}
