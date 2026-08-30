import { NextFunction, Request, Response } from "express";
import BusinessError from "../error/AppError.js";
import jsonwebtoken from "jsonwebtoken";
import jwtConfig from "../config/jwt.js";
import { JwtPayload } from "jsonwebtoken";

export default function handleAuth() {
  return (
    request: Request & { payload: JwtPayload },
    response: Response,
    next: NextFunction,
  ) => {
    const token = request.headers.authorization;

    if (!token) {
      throw new BusinessError(404, "Token não encontrado");
    }

    try {
      request.payload = jsonwebtoken.verify(
        token.replace("Bearer ", "").trim(),
        jwtConfig.secret,
      );
    } catch (error) {
      throw new BusinessError(401, "Token Inválido");
    }
  };
}
