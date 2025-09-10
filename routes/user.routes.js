import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controller/user.controller.js";
import { requireAuth } from "../middleware/auth.middleware.js";

const userRouter = express.Router();

userRouter.use(requireAuth);

userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);

export default userRouter;
