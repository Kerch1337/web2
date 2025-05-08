import path from "path";
import { swaggerDoc as authDoc } from "../routes/auth.routes";
import { swaggerDoc as usersDoc } from "../routes/users.routes";

const swaggerDefinition = {
  openapi: "3.0.0",
  info: {
    title: "Web Technologies API",
    version: "1.0.0",
    description: "API documentation for authentication and user management",
    contact: {
      name: "Your Name",
      email: "your.email@example.com"
    }
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
        bearerFormat: "JWT"
      }
    },
  },
  tags: [
    {
      name: "Auth",
      description: "Authentication endpoints"
    },
    {
      name: "Users",
      description: "User management endpoints"
    }
  ]
};

const swaggerSpec = {
  ...swaggerDefinition,
  paths: {
    ...authDoc.paths,
    ...usersDoc.paths
  }
};

export default swaggerSpec;