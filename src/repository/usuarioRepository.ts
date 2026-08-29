import { Usuario } from "../modules/usuario/usuario.js";

export class UsuarioRepository {
  private static _INSTANCE: UsuarioRepository;
  protected database: Usuario[];

  constructor() {
    this.database = [];
  }

  static getInstance(): UsuarioRepository {
    if (!UsuarioRepository._INSTANCE) {
      UsuarioRepository._INSTANCE = new UsuarioRepository();
    }
    return UsuarioRepository._INSTANCE;
  }

  async save(value: Usuario): Promise<number> {
    this.database.push(value);
    return this.database.indexOf(value);
  }
}
