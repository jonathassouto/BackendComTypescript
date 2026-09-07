import { DocSwagger } from "../config.js";
import { responseSchema } from "../patterns.js";
import { createAgendamentoSchema } from "../schema/agendamentoSchema.js";

/**Rota Post Usuario */
export const routerPostAgendamento: void =
  DocSwagger.getInstance().registryDocsPath({
    method: "post",
    path: "/agendamento",
    summary: "Rota criação de agendamento",
    tags: ["Agendamento"],
    request: {
      body: {
        content: {
          "application/json": {
            schema: createAgendamentoSchema,
          },
        },
      },
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: responseSchema,
          },
        },
      },
    },
    security: [{ bearerAuth: [] }],
  });

DocSwagger.getInstance().registryDocsPath({
  method: "get",
  path: "/agendamento",
  summary: "Rota consulta agendamento",
  tags: ["Agendamento"],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: responseSchema,
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
});

DocSwagger.getInstance().registryDocsPath({
  method: "put",
  path: "/agendamento/{id}",
  summary: "Rota alterar data agendamento",
  tags: ["Agendamento"],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
      },
    },
  ],
  request: {
    body: {
      content: {
        "application/json": {
          schema: createAgendamentoSchema,
        },
      },
    },
  },
  responses: {
    200: {
      content: {
        "application/json": {
          schema: responseSchema,
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
});

DocSwagger.getInstance().registryDocsPath({
  method: "delete",
  path: "/agendamento/{id}",
  summary: "Rota excluir agendamento",
  tags: ["Agendamento"],
  parameters: [
    {
      name: "id",
      in: "path",
      required: true,
      schema: {
        type: "integer",
      },
    },
  ],
  responses: {
    200: {
      content: {
        "application/json": {
          schema: responseSchema,
        },
      },
    },
  },
  security: [{ bearerAuth: [] }],
});
