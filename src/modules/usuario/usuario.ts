export interface Usuario {
  id: number;
  nome: string;
  email: string;
  senha: string;
}

export interface LoginUsuario {
  email: string;
  senha: string;
}
