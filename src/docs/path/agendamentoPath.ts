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
