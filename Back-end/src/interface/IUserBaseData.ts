import { userDateDTO } from "../types/user";

export interface IUserBaseData {
  singUp(user: userDateDTO): Promise<void>;
  getUser(user: string): Promise<userDateDTO>;
}
