import { typeToFlattenedError } from "zod/v3";

type flattenedScema = typeToFlattenedError<any, string> | null;

export default class BusinessError extends Error {
  statusHttp: number;
  details: string;
  schema: flattenedScema;

  constructor(
    statusHttp: number,
    message: string,
    details: string = "",
    schema: flattenedScema = null,
  ) {
    super(message);
    this.statusHttp = statusHttp;
    this.details = details;
    this.schema = schema;
  }

  toJson() {
    return {
      status: "error",
      message: this.message,
      datails: this.details,
      schema: this.schema,
    };
  }
}
