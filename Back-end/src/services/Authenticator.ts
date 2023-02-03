import * as jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();

export type AuthenticationData = {
  id: string
}

export class Authenticator {
  generationToken = ( {id}: AuthenticationData) : string => {
    return jwt.sign({id}, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION
    });
  };
  getTokenData = (token: string)  => {
    try {
      const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as string;

      return tokenData as string;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
