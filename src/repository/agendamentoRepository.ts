import BusinessError from "../error/AppError.js";
import { AgendamentoModel } from "../model/agendamento.model.js";
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
    const docAgendamento = new AgendamentoModel(value);
    await docAgendamento.save();
    console.log(docAgendamento.toJSON());
    return value.id;
  }

  async get() {
    return await AgendamentoModel.find({});
  }

  async getByUserId(id: number) {
    const docs = await AgendamentoModel.find({ idusuario: id }).exec();

    //const data = this.database.filter((i) => i.idusuario === id);

    return docs;
  }

  async getById(id: number) {
    const data = await AgendamentoModel.findOne({ id: id }).exec();

    if (!data) {
      throw new BusinessError(400, "ID do agendamento não encontrado!");
    }

    return data;
  }

  async alterDate(id: number, newdate: string) {
    let agendamento = await this.getById(id);

    agendamento.dataAlteracao = this.formatDate(new Date());
    agendamento.data = this.formatDate(new Date(newdate));

    agendamento = await agendamento.save();
  }

  async deleteByID(id: number): Promise<void> {
    await AgendamentoModel.deleteOne({ id: id });
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
