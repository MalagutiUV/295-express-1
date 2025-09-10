import {
  createUser,
  getUserById,
  getUsers,
} from "../controller/user.controller";
import { requireAuth } from "../middleware/auth.middleware";

router.use(requireAuth);
// User Routes
router.get("/users", getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
