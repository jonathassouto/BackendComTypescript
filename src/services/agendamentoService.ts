import { Agendamento } from "../modules/agendamento/agendamento.js";
import { AgendamentoRepository } from "../repository/agendamentoRepository.js";

export default class AgendamentoService {
  constructor(private agendamentoRepository: AgendamentoRepository) {
    this.agendamentoRepository = agendamentoRepository;
  }

  async save(value: Agendamento) {
    return await this.agendamentoRepository.save(value);
  }
}
