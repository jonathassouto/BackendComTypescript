import zod from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { DocSwagger } from "../config.js";
extendZodWithOpenApi(zod);

export const createAgendamentoSchema = zod.object({
  data: zod.iso
    .datetime({ offset: true })
    .openapi({ example: "yyyy-mm-ddThh24:mi:ss-00:00" }),
});

export const getAgendamentoSchemaResponse = zod.object({
  idusuario: zod.number(),
  data: zod.date(),
  dataAlteracao: zod.date(),
  dataCriacao: zod.date(),
  id: zod.number(),
});

DocSwagger.getInstance().registryDocsSchema(
  "createAgendamentoSchema",
  createAgendamentoSchema,
);
DocSwagger.getInstance().registryDocsSchema(
  "getAgendamentoSchemaResponse",
  getAgendamentoSchemaResponse,
);
