import express from 'express';
import { requireAuth } from '../middleware/auth.middleware.js';
import {
  getSongs,
  getSongById,
  createSong,
} from '../controller/song.controller.js';

const songRouter = express.Router();

songRouter.use(requireAuth);

/**
 * @openapi
 * /song:
 *   get:
 *     summary: Liste alle Songs
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Erfolgreiche Antwort mit Songs
 *       401:
 *         description: Nicht eingeloggt
 */
songRouter.get('/', getSongs);

/**
 * @openapi
 * /song/{id}:
 *   get:
 *     summary: Hole einen Song nach ID
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: Die ID des Songs
 *     responses:
 *       200:
 *         description: Erfolgreiche Antwort mit dem Song
 *       401:
 *         description: Nicht eingeloggt
 *       404:
 *         description: Song nicht gefunden
 */
songRouter.get('/:id', getSongById);

/**
 * @openapi
 * /song:
 *   post:
 *     summary: Erstelle einen neuen Song
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               artist:
 *                 type: string
 *               album:
 *                 type: string
 *               year:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Song erstellt
 *       400:
 *         description: Ungültige Eingabe
 *       401:
 *         description: Nicht eingeloggt
 */
songRouter.post('/', createSong);

export default songRouter;
