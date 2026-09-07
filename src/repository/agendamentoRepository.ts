import BusinessError from "../error/AppError.js";
import { Agendamento } from "../modules/agendamento/agendamento.js";

export class AgendamentoRepository {
  private static _INSTANCE: AgendamentoRepository;
  private database: Array<Agendamento>;

  constructor() {
    this.database = [
      {
        idusuario: 1,
        data: "yyyy-mm-dd",
        dataAlteracao: "",
        dataCriacao: "2026-09-06",
        id: 1,
      },
    ];
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

  async get() {
    return this.database;
  }

  async getByUserId(id: number) {
    const data = this.database.filter((i) => i.idusuario === id);

    return await data;
  }

  async getById(id: number) {
    const data = this.database.filter((i) => i.id === id)[0];

    if (!data) {
      throw new BusinessError(400, "ID do agendamento não encontrado!");
    }

    return await data;
  }

  async alterDate(id: number, newdate: string) {
    const agendamento = await this.getById(id);
    agendamento.dataAlteracao = this.formatDate(new Date());
    agendamento!.data = this.formatDate(new Date(newdate));
    console.log(this.database);
  }

  async deleteByID(id: number): Promise<void> {
    const agendamento = await this.getById(id);
    const index = this.database.indexOf(agendamento);

    this.database.splice(index, 1);

    console.log(this.database);
  }

  formatDate(data: Date) {
    return Intl.DateTimeFormat("sv-SE", {
      timeZone: "America/Sao_paulo",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    }).format(data);
  }
}
