import { Query } from "mongoose";
import { Agendamento } from "../modules/agendamento/agendamento.js";
import { AgendamentoRepository } from "../repository/agendamentoRepository.js";

export default class AgendamentoService {
  constructor(private agendamentoRepository: AgendamentoRepository) {
    this.agendamentoRepository = agendamentoRepository;
  }

  async save(value: Agendamento): Promise<number> {
    value.data = this.agendamentoRepository.formatDate(new Date(value.data));
    value.dataCriacao = this.agendamentoRepository.formatDate(new Date());

    return await this.agendamentoRepository.save(value);
  }

  async getByUserId(id: number): Promise<any> {
    return await this.agendamentoRepository.getByUserId(id);
  }

  async deleteByID(id: number) {
    await this.agendamentoRepository.deleteByID(id);
  }

  async alterDate(id: number, newdate: string) {
    await this.agendamentoRepository.alterDate(id, newdate);
  }
}
