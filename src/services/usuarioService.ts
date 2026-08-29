import { Usuario } from "../modules/usuario/usuario.js";
import { UsuarioRepository } from "../repository/usuarioRepository.js";

export class UsuarioService {
  constructor(private usuarioRepository: UsuarioRepository) {
    this.usuarioRepository = usuarioRepository;
  }

  async save(value: Usuario): Promise<number> {
    return await this.usuarioRepository.save(value);
  }
}
