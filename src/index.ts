import express, { Express, NextFunction, Request, Response } from "express";
import swaggerui from "swagger-ui-express";
import { DocSwagger } from "./docs/config.js";
import "./docs/path/usuarioPath.js";
import "./docs/path/agendamentoPath.js";
import { routeUsuario } from "./routers/usuarioRouters.js";
import { handleError } from "./middlewares/handlerError.js";
import { routeAgendamento } from "./routers/agendamentoRoute.js";

const app: Express = express();

app.use(express.json());

app.use(
  "/docs",
  swaggerui.serve,
  swaggerui.setup(DocSwagger.getInstance().generate(), {
    swaggerOptions: {
      persistAuthorization: true,
      docExpansion: "none",
      tryItOutEnabled: true,
    },
  }),
);

app.use("/usuario", routeUsuario);
app.use("/agendamento", routeAgendamento);

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    handleError(error, request, response, next);
  },
);

app.listen(3030, "localhost", (): void => {
  console.log(`Servidor em execução!`);
});
