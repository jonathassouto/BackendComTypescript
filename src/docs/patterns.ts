import { extendZodWithOpenApi } from "@asteasolutions/zod-to-openapi";
import zod from "zod";

extendZodWithOpenApi(zod);

export const responseSchema = zod.object({
  status: zod.string().openapi({ example: "Success" }),
  message: zod.string(),
});
