import {
  OpenAPIRegistry,
  OpenApiGeneratorV3,
} from "@asteasolutions/zod-to-openapi";
import type { OpenAPIDefinitions } from "@asteasolutions/zod-to-openapi/dist/openapi-registry.js";

const registryDocs: OpenAPIRegistry = new OpenAPIRegistry();

const generateDocs = new OpenApiGeneratorV3(registryDocs.definitions);

const docSwagger = generateDocs.generateDocument({
  openapi: "3.0.0",
  info: {
    title: "Barbershop API",
    version: "1.0.0",
  },
});

export { docSwagger };
