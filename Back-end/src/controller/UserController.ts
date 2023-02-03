import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { CustomError } from "../error/CustomError";
import { userDTO, userLoginDTO } from "../types/user";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}
  signUpController = async (req: Request, res: Response): Promise<void> => {
   
    try {
      const { user, email, password } = req.body;
      const userDTO: userDTO = {
        user,
        email,
        password
      };
      const token = await this.userBusiness.signUpBusiness(userDTO);
      
      res.send({ message: "Usuário cadastrado com sucesso!", token: token }).status(201)
        
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message});
      } else if (error) {
        console.log(error)
        res.status(400).send({ message: error });
      } else {
        res.status(500).send({ message: "Server error" });
      }
    }
  };
  loginController = async (req: Request, res: Response): Promise<void> => {
    try {
      const { user, password } = req.body;
      const userLoginDTO: userLoginDTO = {
        user,
        password
      };
      const token = await this.userBusiness.loginBusiness(userLoginDTO);

      res.status(201).send({ token });
    } catch (error) {
      if (error instanceof CustomError) {
        res.status(error.statusCode).send({ message: error.message });
      } else if (error) {
        res.status(400).send({ error });
      } else {
        res.status(500).send({ message: "error no servidor" });
      }
    }
  };
}
