import dotenv from "dotenv";
import { AddressInfo } from "net";
import express from "express";
import cors from "cors";
import { userRouter } from "./routes/userRouter";
import { taskRouter } from "./routes/taskRouter";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cors())

app.use("/task", taskRouter);
app.use("/", userRouter);

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});