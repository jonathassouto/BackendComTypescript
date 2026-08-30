import { Request, Response } from "express";
import { LoginUsuario, Usuario } from "../modules/usuario/usuario.js";
import { UsuarioService } from "../services/usuarioService.js";
import BusinessError from "../error/AppError.js";

export default class UsuarioController {
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService = usuarioService;
  }

  async save(request: Request, response: Response): Promise<Response> {
    const usuario: Usuario = request.body;

    const id = await this.usuarioService.save(usuario);

    if (id) {
      return response.status(201).json({
        status: "success",
        message: `Usuário criado com sucesso Id = ${id}.`,
      });
    }

    return response.status(400).json({
      status: "error",
      message: "Usuário não cadastrado!",
    });
  }

  async login(request: Request, response: Response): Promise<Response> {
    const credenciais: LoginUsuario = request.body;

    const token = await this.usuarioService.login(credenciais);

    if (token) {
      return response.status(200).json({
        status: "success",
        message: "Usuário autenticado com sucesso!",
        token: token,
      });
    }

    throw new BusinessError(500, "Falha ao gerar o token");
  }
}
