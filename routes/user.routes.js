import express from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controller/user.controller";
import { requireAuth } from "../middleware/auth.middleware";

const userRouter = express.Router();

userRouter.use(requireAuth);
// User Routes
userRouter.get("/", getUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);

export default userRouter;
