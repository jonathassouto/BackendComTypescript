import UsuarioController from "../controllers/usuarioController.js";
import { UsuarioRepository } from "../repository/usuarioRepository.js";
import { UsuarioService } from "../services/usuarioService.js";

const repositoryUsuario = UsuarioRepository.getInstance();
const serviceUsuario = new UsuarioService(repositoryUsuario);
export const controllerUsuario = new UsuarioController(serviceUsuario);
