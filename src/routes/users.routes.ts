import {Router} from "express";
import {deleteUser, getUsers, createUser, updateUser} from "../controllers/users.controllers";

const router = Router()

/**
 * @openapi
 *  tags:
 *      name: Users
 *      description: Controllers for users
 */

/**
 * @openapi
 * /users:
 *   get:
 *     summary: Получить список всех пользователей
 *     description: Возвращает список всех пользователей.
 *     tags: [Users]
 *     responses:
 *       '202':
 *         description: Успех
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
 *         description: Ошибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 */
router.get('/', getUsers);

/**
 * @openapi
 * /users:
 *   post:
 *     summary: Создать пользователя
 *     description: Добавляет нового пользователя в БД.
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - username
 *                      - email
 *                  properties:
 *                      username:
 *                          type: string
 *                          example: Name
 *                      email:
 *                          type: string
 *                          example: xxxx@mail.com
 *     responses:
 *       '201':
 *         description: Успех
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
 *         description: Ошибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 */
router.post('/', createUser);

/**
 * @openapi
 * /users:
 *   delete:
 *     summary: Удалить пользователя
 *     description: Удаляет пользователя из БД.
 *     tags: [Users]
 *     requestBody:
 *      required: true
 *      content:
 *          application/json:
 *              schema:
 *                  type: object
 *                  required:
 *                      - userId
 *                  properties:
 *                      userId:
 *                          type: string
 *     responses:
 *       '202':
 *         description: Успех
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
 *         description: Ошибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                  message:
 *                      type: string
 */
router.delete('/', deleteUser);

/**
 * @openapi
 * /users/{userId}:
 *   put:
 *     summary: Обновить пользователя
 *     description: Обновляет информацию о пользователе из БД.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Успех
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *       '400':
 *         description: Ошибка
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *       '404':
 *         description: Пользователь не найден
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 */
router.put('/:userId', updateUser);

export default router;