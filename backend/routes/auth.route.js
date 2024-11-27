import express from "express";

import { signup } from "../controllers/auth.controller.js";
import { login } from "../controllers/auth.controller.js";
import { logout } from "../controllers/auth.controller.js";

// Import the `authCheck` controller function to verify user authentication.
import { authCheck } from "../controllers/auth.controller.js";

// Import the `protectRoute` middleware to secure routes requiring authentication.
import { protectRoute } from "../middleware/protectRoute.js";

const router = express.Router();
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// The `protectRoute` middleware ensures the route is accessible only to authenticated users.
// If authentication passes, the `authCheck` controller is executed.
router.get("/authCheck", protectRoute, authCheck);

export default router;
