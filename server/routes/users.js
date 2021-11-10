import express from  "express";
const router = express.Router();

import { signin, signup, fetchUser } from "../controllers/users.js";

router.get("/", fetchUser);
router.post("/user-signin", signin);
router.post("/user-signup", signup);
export default router;