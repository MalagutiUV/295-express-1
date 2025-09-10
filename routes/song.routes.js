import express from "express";
import { requireAuth } from "../middleware/auth.middleware.js";
import { getSongs, getSongById } from "../controller/song.controller.js";

const songRouter = express.Router();

// route definieren
songRouter.use(requireAuth);

songRouter.get("/", getSongs);
songRouter.get("/:id", getSongById);
songRouter.post("/".createSong);
export default songRouter;
