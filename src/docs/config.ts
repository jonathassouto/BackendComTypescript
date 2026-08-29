import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
  RouteConfig,
} from "@asteasolutions/zod-to-openapi";
import { OpenAPIObject } from "@asteasolutions/zod-to-openapi/dist/types.js";
import zod from "zod";

export class DocSwagger {
  private static _DocsSwaggerInstance: DocSwagger;
  protected registry: OpenAPIRegistry;

  constructor() {
    this.registry = new OpenAPIRegistry();
  }

  static getInstance(): DocSwagger {
    if (!DocSwagger._DocsSwaggerInstance) {
      DocSwagger._DocsSwaggerInstance = new DocSwagger();
    }
    return DocSwagger._DocsSwaggerInstance;
  }

  registryDocsPath(value: RouteConfig): void {
    this.registry.registerPath(value);
  }
  registryDocsSchema(name: string, value: zod.ZodObject): void {
    this.registry.register(name, value);
  }

  generate() {
    const docSwagger = new OpenApiGeneratorV3(this.registry.definitions);

    return docSwagger.generateDocument({
      openapi: "3.0.0",
      info: {
        title: "Barbershop API",
        version: "1.0.0",
      },
    });
  }
}
