import { CustomError } from "../error/CustomError";
import { IUserBaseData } from "../interface/IUserBaseData";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGeneration } from "../services/IdGenerations";
import { userDateDTO, userDTO, userLoginDTO } from "../types/user";

export class UserBusiness {
  constructor(
    private idGeneration: IdGeneration,
    private userDatabase: IUserBaseData,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  signUpBusiness = async (userDTO: userDTO): Promise<string> => {
    const { user, email, password } = userDTO;
    if (!user || !email || !password) {
      throw new CustomError("verifique se os campos foram preenchidos!", 422);
    }

    const id = this.idGeneration.generateId();
    const newPassword = this.hashManager.createHash(password);
    const userDateDTO: userDateDTO = {
      id,
      user,
      email,
      password: newPassword
    };
    await this.userDatabase.singUp(userDateDTO);
    
    const token =  this.authenticator.generationToken({id});
   
    return token;
  };

  loginBusiness = async (loginDTO: userLoginDTO): Promise<string> => {
    const { user, password } = loginDTO;

    const isUser = await this.userDatabase.getUser(user);
    if (!isUser) {
      throw new CustomError("usuario nao encontrado", 404);
    }
    const compareHash = this.hashManager.compareHash(password, isUser.password);
    if (!compareHash) {
      throw new CustomError("Credencias inválidas", 401);
    }
    const payload = {
      id: isUser.id
    };

    const token = this.authenticator.generationToken({id:payload.id});
    return token;
  };
}
