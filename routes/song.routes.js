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

songRouter.get('/:id', getSongById);
songRouter.post('/', createSong);

export default songRouter;
