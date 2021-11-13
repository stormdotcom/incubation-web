import express from  "express";
import auth from "../auth/auth.js";
const router = express.Router();

import { signin, signup, fetchUser, companyDetails } from "../controllers/users.js";

router.post("/", fetchUser);
router.post("/user-signin", signin);
router.post("/user-signup", signup);
router.post("/companyDetails", companyDetails);
export default router;