import express from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { UserDataBase } from "../data/UserDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";

import { IdGeneration } from "../services/IdGenerations";
export const userRouter = express.Router();
const idGeneration: IdGeneration = new IdGeneration();
const userDataBase: UserDataBase = new UserDataBase();
const hashManager: HashManager = new HashManager();
const authenticator: Authenticator = new Authenticator();
const userBusiness: UserBusiness = new UserBusiness(
  idGeneration,
  userDataBase,
  hashManager,
  authenticator
);
const userController = new UserController(userBusiness);

userRouter.post("/login", (req, res) =>
  userController.loginController(req, res)
);
userRouter.post("/signUp", (req, res) =>
  userController.signUpController(req, res)
);