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

routeAgendamento.get("/", handleAuth(), async (request, response) => {
  await controllerAgendamento.getByUserId(request, response);
});

routeAgendamento.put(
  "/:id",
  validateSchema(createAgendamentoSchema),
  handleAuth(),
  async (request, response) => {
    await controllerAgendamento.alterDate(request, response);
  },
);

routeAgendamento.delete("/:id", handleAuth(), async (request, response) => {
  await controllerAgendamento.deleteByID(request, response);
});

export { routeAgendamento };
