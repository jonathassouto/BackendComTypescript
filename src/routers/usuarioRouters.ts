import { Router } from "express";
import { controllerUsuario } from "../dependencies/injectionDependences.js";
import { validateSchema } from "../middlewares/validateSchema.js";
import {
  createUsuarioSchema,
  loginUsuarioSchema,
} from "../docs/schema/usuarioSchema.js";

const routeUsuario = Router();

routeUsuario.post(
  "/",
  validateSchema(createUsuarioSchema),
  async (request, response) => {
    await controllerUsuario.save(request, response);
  },
);

routeUsuario.post(
  "/login",
  validateSchema(loginUsuarioSchema),
  async (request, response) => {
    await controllerUsuario.login(request, response);
  },
);

export { routeUsuario };
