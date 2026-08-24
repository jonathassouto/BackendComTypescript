import express, { Express } from "express";
import swaggerui from "swagger-ui-express";
import { docSwagger } from "./docs/config.js";

const app: Express = express();

app.use(express.json());

app.use("/docs", swaggerui.serve, swaggerui.setup(docSwagger));

app.listen(3030, "localhost", (): void => {
  console.log(`Servidor em execução!`);
});
