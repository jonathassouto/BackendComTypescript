import AgendamentoController from "../controllers/agendamentoController.js";
import UsuarioController from "../controllers/usuarioController.js";
import { AgendamentoRepository } from "../repository/agendamentoRepository.js";
import { UsuarioRepository } from "../repository/usuarioRepository.js";
import AgendamentoService from "../services/agendamentoService.js";
import { UsuarioService } from "../services/usuarioService.js";

const repositoryUsuario = UsuarioRepository.getInstance();
const serviceUsuario = new UsuarioService(repositoryUsuario);
export const controllerUsuario = new UsuarioController(serviceUsuario);

const repositoryAgendamento = AgendamentoRepository.getInstance();
const serviceAgendamento = new AgendamentoService(repositoryAgendamento);
export const controllerAgendamento = new AgendamentoController(
  serviceAgendamento,
);
