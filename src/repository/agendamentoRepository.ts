import { Agendamento } from "../modules/agendamento/agendamento.js";

export class AgendamentoRepository {
  private static _INSTANCE: AgendamentoRepository;
  private database: Array<Agendamento>;

  constructor() {
    this.database = [];
  }

  static getInstance() {
    if (!AgendamentoRepository._INSTANCE) {
      AgendamentoRepository._INSTANCE = new AgendamentoRepository();
    }

    return AgendamentoRepository._INSTANCE;
  }

  async save(value: Agendamento) {
    value.id = this.database.length + 1;
    this.database.push(value);
    console.log(this.database);
    return value.id;
  }
}
