import UsuarioController from "../controllers/usuarioControllers.js";
import { UsuarioRepository } from "../repository/usuarioRepository.js";
import { UsuarioService } from "../services/usuarioService.js";

const repositoryUsuario = UsuarioRepository.getInstance();
const serviceUsuario = new UsuarioService(repositoryUsuario);
export const controllerUsuario = new UsuarioController(serviceUsuario);
