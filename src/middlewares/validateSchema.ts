import { NextFunction, Request, Response } from "express";
import z from "zod";
import BusinessError from "../error/AppError.js";
import { ZodObject } from "zod";

export function validateSchema(schema: ZodObject<any>) {
  return (request: Request, respose: Response, next: NextFunction) => {
    const validate = schema.safeParse(request.body);

    if (!validate.success) {
      throw new BusinessError(
        400,
        "Invalid Schema",
        "",
        z.flattenError(validate.error),
      );
    }
  };
}
