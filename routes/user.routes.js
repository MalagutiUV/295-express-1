import express from 'express';
import {
  createUser,
  getUserById,
  getUsers,
} from '../controller/user.controller.js';
import { requireAuth } from '../middleware/auth.middleware.js';

const userRouter = express.Router();

userRouter.use(requireAuth);

/**
 * @openapi
 * /user:
 *   get:
 *     summary: Liste alle Benutzer
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Erfolgreiche Antwort mit Benutzern
 *       401:
 *         description: Nicht eingeloggt
 *
 * /user/{id}:
 *   get:
 *     summary: Hole einen Benutzer nach ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Die ID des Benutzers
 *     responses:
 *       200:
 *         description: Erfolgreiche Antwort mit dem Benutzer
 *       401:
 *         description: Nicht eingeloggt
 *       404:
 *         description: Benutzer nicht gefunden
 *
 * /user:
 *   post:
 *     summary: Erstelle einen neuen Benutzer
 *     security:
 *       - bearerAuth: []
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
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Benutzer erstellt
 *       400:
 *         description: Ungültige Eingabe
 *       401:
 *         description: Nicht eingeloggt
 */
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.post('/', createUser);

export default userRouter;
