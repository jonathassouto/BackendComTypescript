import { Router } from "express";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createAgendamentoSchema } from "../docs/schema/agendamentoSchema.js";
import handleAuth from "../middlewares/auth.js";
import { controllerAgendamento } from "../dependencies/injectionDependences.js";

const routeAgendamento = Router();

routeAgendamento.post(
  "/",
  validateSchema(createAgendamentoSchema),
  handleAuth(),
  async (request, response) => {
    await controllerAgendamento.save(request, response);
  },
);

export { routeAgendamento };
