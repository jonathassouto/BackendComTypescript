import zod from "zod";
import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import { DocSwagger } from "../config.js";
extendZodWithOpenApi(zod);

export const createAgendamentoSchema = zod.object({
  data: zod.string().openapi({ example: "yyyy-mm-dd" }),
});

DocSwagger.getInstance().registryDocsSchema(
  "createAgendamentoSchema",
  createAgendamentoSchema,
);
