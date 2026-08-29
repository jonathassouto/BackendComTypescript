import { NextFunction, Request, Response } from "express";
import BusinessError from "../error/AppError.js";

export function handleError(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (error instanceof BusinessError) {
    return response.status(error.statusHttp).json(error.toJson());
  }

  return response.status(500).json({
    status: "error",
    message: error.message,
    stack: error.stack,
  });
}
