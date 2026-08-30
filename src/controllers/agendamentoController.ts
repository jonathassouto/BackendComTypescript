import { Request, Response } from "express";
import AgendamentoService from "../services/agendamentoService.js";
import { JwtPayload } from "jsonwebtoken";
import { Agendamento } from "../modules/agendamento/agendamento.js";

export default class AgendamentoController {
  constructor(private agendamentoService: AgendamentoService) {
    this.agendamentoService = agendamentoService;
  }

  save(request: Request & { payload: JwtPayload }, response: Response) {
    const payload = request.payload;

    this.agendamentoService.save();
  }
}
