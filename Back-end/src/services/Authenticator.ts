import * as jwt from "jsonwebtoken";

import dotenv from "dotenv";
dotenv.config();
export class Authenticator {
  generationToken = (payload: string) => {
    return jwt.sign(payload, process.env.JWT_KEY as string, {
      expiresIn: process.env.JWT_DURATION
    });
  };
  getTokenData = (token: string) => {
    try {
      const tokenData = jwt.verify(token, process.env.JWT_KEY as string) as string;

      return tokenData;
    } catch (err) {
      console.log(err);
      return err;
    }
  };
}
