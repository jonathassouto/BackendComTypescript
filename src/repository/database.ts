import { MongoClient } from "mongodb";
import BusinessError from "../error/AppError.js";
import { AgendamentoModel } from "../model/agendamento.model.js";
import mongoose from "mongoose";

interface IDatabase {
  connect(): Promise<any>;
}

export default class DatabaseConnect implements IDatabase {
  private static _INSTANCE: DatabaseConnect;

  constructor() {}

  static getInstance(): DatabaseConnect {
    if (!DatabaseConnect._INSTANCE) {
      DatabaseConnect._INSTANCE = new DatabaseConnect();
    }

    return DatabaseConnect._INSTANCE;
  }

  async connect(): Promise<any> {
    if (process.env.MONGODB_USERNAME && process.env.MONGODB_PASSWORD) {
      try {
        await mongoose.connect(
          `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@barbershopdb.ss0b5lf.mongodb.net/barberdb`,
        );
        console.log("Conexão com o Mongo estabelecida com sucesso");
      } catch (error) {
        console.log("Erro ao conectar com o Mongo");
        throw error;
      }
    } else {
      throw new BusinessError(
        500,
        "Variáveis de ambiente MONGODB_USERNAME e MONGODB_PASSWORD são requeridas",
      );
    }
  }
}
