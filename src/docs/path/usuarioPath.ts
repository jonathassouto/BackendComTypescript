import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { DocSwagger } from "../config.js";
import {
  createUsuarioSchema,
  usuarioSchemaDto,
} from "../schema/usuarioSchema.js";

/**Rota get */
export const routerGet: void = DocSwagger.getInstance().registryDocsPath({
  method: "post",
  path: "/user",
  summary: "Criação de login para usuário",
  tags: ["Usuário"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createUsuarioSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: createUsuarioSchema,
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
});
