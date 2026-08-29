import BusinessError from "../error/AppError.js";
import { LoginUsuario, Usuario } from "../modules/usuario/usuario.js";
import { UsuarioRepository } from "../repository/usuarioRepository.js";
import bcrypt from "bcrypt";
import jwtConfig from "../config/jwt.js";
import jsonwebtoken from "jsonwebtoken";

export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async save(value: Usuario): Promise<number> {
    const verifyExists = await this.usuarioRepository.getUserByEmail(
      value.email,
    );

    if (verifyExists) {
      throw new BusinessError(400, `Email ${verifyExists.email} já cadastrado`);
    }

    return await this.usuarioRepository.save(value);
  }

  async login(usuario: LoginUsuario): Promise<string> {
    const getUsuario = await this.usuarioRepository.getUserByEmail(
      usuario.email,
    );

    if (!getUsuario) {
      throw new BusinessError(401, `Usuário não cadastrado.`);
    }

    const validatePassword = await bcrypt.compare(
      usuario.senha,
      getUsuario.senha,
    );

    if (!validatePassword) {
      throw new BusinessError(401, `Senha inválida!`);
    }

    const token = jsonwebtoken.sign(
      {
        email: usuario.email,
      },
      jwtConfig.secret,
    );

    return token;
  }
}
