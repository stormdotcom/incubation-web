import express from  "express";
const router = express.Router();

import { signin, signup, companyDetails } from "../controllers/users.js";

router.get("/", companyDetails);
router.post("/signin", signin);
router.post("/signup", signup);
export default router;