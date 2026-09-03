import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import zod from "zod";
import { DocSwagger } from "../../docs/config.js";

extendZodWithOpenApi(zod);

export const usuarioSchemaDto = zod.object({
  nome: zod.string().openapi({ example: "Miles Morales" }),
  email: zod.email(),
});

export const createUsuarioSchema = zod.object({
  nome: zod.string().openapi({ example: "Miles Morales" }),
  email: zod.email(),
  senha: zod.string(),
});

export const loginUsuarioSchema = zod.object({
  email: zod.email(),
  senha: zod.string(),
});

DocSwagger.getInstance().registryDocsSchema(
  "usuarioSchemaDto",
  usuarioSchemaDto,
);

DocSwagger.getInstance().registryDocsSchema(
  "createUsuarioSchema",
  createUsuarioSchema,
);

DocSwagger.getInstance().registryDocsSchema(
  "loginUsuarioSchema",
  loginUsuarioSchema,
);
