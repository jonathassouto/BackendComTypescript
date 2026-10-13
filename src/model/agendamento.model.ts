import mongoose from "mongoose";
import { int } from "zod";

const agendamentoSchema = new mongoose.Schema({
  idusuario: { type: Number },
  data: { type: String },
  dataAlteracao: { type: String },
  dataCriacao: { type: String },
  id: {
    type: Number,
  },
});

export const AgendamentoModel = mongoose.model(
  "agendamento",
  agendamentoSchema,
);
