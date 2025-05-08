import {Router} from "express";
import { signUp, signIn } from "../controllers/auth.controller";

const router = Router();


/**
 * @openapi
 *  tags:
 *      name: Auth
 *      description: Endpoints for sign-in sign-up
 */

 /**
 * @openapi
 * /auth/sign-up:
 *   post:
 *     summary: register new user
 *     description: creates new user in DB
 *     tags: [Auth]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - username
 *                      - email
 *                      - password
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: John Doe
 *                      email:
 *                          type: string
 *                          example: johndoe@mail.com
 *                      password:
 *                          type: string
 *                          example: 1234
 *                      role:
 *                          type: string
 *                          default: user
 *                          example: user
 *     responses:
 *       '201':
 *         description: ”спех
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 user:
 *                   type: object
 *                   properties:
 *                     _id:
 *                       type: string
 *                       example: 67f4c70441b7447c466a53ab
 *                     username:
 *                       type: string
 *                       example: John Doe
 *                     email:
 *                       type: string
 *                       example: johndoe@mail.com
 *                 token:
 *                   type: string
 *                 message:
 *                   type: string
 *       '400':
 *         description: ќшибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 */
router.post("/sign-up", signUp)


/**
 * @openapi
 * /auth/sign-in:
 *   post:
 *     summary: authentificate user
 *     description: authentificate user
 *     tags: [Auth]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - username
 *                      - password
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: John Doe
 *                      password:
 *                          type: string
 *                          example: 1234
 *     responses:
 *       '201':
 *         description: ”спех
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *       '400':
 *         description: ќшибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 */
router.post("/sign-in", signIn)

export default router

// Экспорт для Swagger
export const swaggerDoc = {
  paths: {
    "/auth/sign-up": {
      post: {
        summary: "Register new user",
        description: "Creates new user in DB",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["username", "email", "password"],
                properties: {
                  username: { type: "string", example: "John Doe" },
                  email: { type: "string", example: "johndoe@mail.com" },
                  password: { type: "string", example: "12345" },
                  role: { type: "string", default: "user", example: "user" }
                }
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    user: {
                      type: "object",
                      properties: {
                        _id: { type: "string", example: "67f4c70441b7447c466a53ab" },
                        username: { type: "string", example: "John Doe" },
                        email: { type: "string", example: "johndoe@mail.com" }
                      }
                    },
                    token: { type: "string" },
                    message: { type: "string" }
                  }
                }
              }
            }
          },
          "400": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" }
                  }
                }
              }
            }
          }
        }
      }
    },
    "/auth/sign-in": {
      post: {
        summary: "Authenticate user",
        description: "Authenticate user",
        tags: ["Auth"],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                type: "object",
                required: ["username", "password"],
                properties: {
                  username: { type: "string", example: "John Doe" },
                  password: { type: "string", example: "12345" }
                }
              }
            }
          }
        },
        responses: {
          "201": {
            description: "Success",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: {
                    type: "object",
                    properties: {
                      _id: { type: "string" },
                      username: { type: "string" },
                      email: { type: "string" }
                    }
                  }
                }
              }
            }
          },
          "400": {
            description: "Error",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: {
                    message: { type: "string" }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};