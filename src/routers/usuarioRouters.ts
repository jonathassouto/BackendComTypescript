import { Router } from "express";
import { controllerUsuario } from "../dependencies/injectionDependences.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import { createUsuarioSchema } from "../docs/schema/usuarioSchema.js";

const routeUsuario = Router();

routeUsuario.post(
  "/",
  validateSchema(createUsuarioSchema),
  (request, response) => {
    controllerUsuario.save(request, response);
  },
);

export { routeUsuario };
