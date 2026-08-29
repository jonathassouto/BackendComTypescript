import { RouteConfig } from "@asteasolutions/zod-to-openapi";
import { DocSwagger } from "../config.js";
import {
  createUsuarioSchema,
  loginUsuarioSchema,
  usuarioSchemaDto,
} from "../schema/usuarioSchema.js";

/**Rota Post Usuario */
export const routerPostUser: void = DocSwagger.getInstance().registryDocsPath({
  method: "post",
  path: "/user",
  summary: "Rota criação de usuário",
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
});

/*Rota Post login*/
export const routerPostLogin: void = DocSwagger.getInstance().registryDocsPath({
  method: "post",
  path: "/user/login",
  summary: "Rota para loign de usuário",
  tags: ["Usuário"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: loginUsuarioSchema,
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
});
