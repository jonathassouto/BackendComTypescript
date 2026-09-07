import { Request, Response } from "express";
import AgendamentoService from "../services/agendamentoService.js";
import { RequestAuth } from "../middlewares/auth.js";
import { Agendamento } from "../modules/agendamento/agendamento.js";
import BusinessError from "../error/AppError.js";

export default class AgendamentoController {
  constructor(private agendamentoService: AgendamentoService) {
    this.agendamentoService = agendamentoService;
  }

  async save(request: Request, response: Response) {
    const payload = JSON.parse((request as RequestAuth).payload);
    const body = request.body;

    const agendamento: Agendamento = {
      idusuario: payload.id,
      data: body.data,
      dataAlteracao: "",
      dataCriacao: "",
    };

    //console.log(payload);

    const id = await this.agendamentoService.save(agendamento);

    if (id) {
      return response.status(201).json({
        status: "success",
        message: `Agendamento criado com sucesso Id = ${id}.`,
      });
    } else {
      throw new BusinessError(
        500,
        "Falha ao registrar o agendamento. Entre em contato com o suporte técnico.",
      );
    }
  }

  async getByUserId(request: Request, response: Response) {
    const user = JSON.parse((request as RequestAuth).payload);

    const data = await this.agendamentoService.getByUserId(user.id);

    return response.status(200).json(data);
  }

  async alterDate(request: Request, response: Response) {
    const parameters = request.params;
    const data = request.body.data;

    await this.agendamentoService.alterDate(Number(parameters.id), data);

    response.status(200).json({
      status: "success",
      message: `Data de agandamento alterada para ${data}`,
    });
  }

  async deleteByID(request: Request, response: Response) {
    const parameters = request.params;

    await this.agendamentoService.deleteByID(Number(parameters.id));
    response.status(200).json({
      status: "success",
      message: `Agendamento excluído com sucesso!!`,
    });
  }
}
