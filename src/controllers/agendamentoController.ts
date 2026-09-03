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
      dataCriacao: new Date().toLocaleDateString("en-CA", {
        timeZone: "America/Sao_Paulo",
      }),
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
}
