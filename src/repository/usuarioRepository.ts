import { validateHeaderName } from "node:http";
import { Usuario } from "../modules/usuario/usuario.js";
import bcrypt from "bcrypt";

export class UsuarioRepository {
  private static _INSTANCE: UsuarioRepository;
  protected database: Usuario[];

  constructor() {
    this.database = [
      {
        nome: "Miles Morales",
        email: "user@example.com",
        senha: "$2b$10$JSAx.rywetN5Pgc8Q9avoOYKT.rkxY7zw86ema2DunU8ZQsxnHvQa",
        id: 1,
      },
    ];
  }

  static getInstance(): UsuarioRepository {
    if (!UsuarioRepository._INSTANCE) {
      UsuarioRepository._INSTANCE = new UsuarioRepository();
    }
    return UsuarioRepository._INSTANCE;
  }

  async save(value: Usuario): Promise<number> {
    value["id"] = this.database.length + 1;
    value["senha"] = await bcrypt.hash(value.senha, 10);

    await this.database.push(value);

    console.log(this.database);
    return value.id;
  }

  async getAllUser(): Promise<Usuario[]> {
    return await this.database;
  }

  async getUserById(user: Usuario): Promise<Usuario | undefined> {
    const usuario: Usuario[] = await this.database.filter(
      (object) => (user.id = object.id),
    );

    return usuario[0];
  }

  async getUserByEmail(email: string): Promise<Usuario | undefined> {
    const usuario: Usuario[] = await this.database.filter(
      (object) => (email = object.email),
    );

    return usuario[0];
  }
}
