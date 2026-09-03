import { NextFunction, Request, Response } from "express";
import BusinessError from "../error/AppError.js";
import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";
import { JwtPayload } from "jsonwebtoken";

export type RequestAuth = Request & { payload: string };

export default function handleAuth() {
  return (request: Request, response: Response, next: NextFunction) => {
    const token = request.headers.authorization;

    if (!token) {
      throw new BusinessError(404, "Token não encontrado");
    }

    try {
      (request as RequestAuth).payload = JSON.stringify(
        jsonwebtoken.verify(
          token.replace("Bearer ", "").trim(),
          jwtConfig.secret,
        ),
      );
      next();
    } catch (error) {
      throw new BusinessError(401, "Token Inválido");
    }
  };
}
