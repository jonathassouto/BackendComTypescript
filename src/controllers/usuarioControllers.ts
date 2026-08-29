import { Request, Response } from "express";
import { Usuario } from "../modules/usuario/usuario.js";
import { UsuarioService } from "../services/usuarioService.js";

export default class UsuarioController {
  constructor(private usuarioService: UsuarioService) {
    this.usuarioService = usuarioService;
  }

  async save(request: Request, response: Response): Promise<Response> {
    const usuario: Usuario = request.body;

    const index = await this.usuarioService.save(usuario);

    if (index > -1) {
      return response.status(201).json({
        status: "success",
        message: "Usuário criado com sucesso",
      });
    }

    return response.status(400).json({
      status: "error",
      message: "Usuário não cadastrado!",
    });
  }
}
