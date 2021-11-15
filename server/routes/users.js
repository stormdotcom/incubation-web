import express from  "express";
import auth from "../auth/auth.js";
const router = express.Router();

import { signin, signup, fetchUser, companyDetails, getCurrentCompany } from "../controllers/users.js";

router.get("/fetchuser/:id", fetchUser);
router.get("/getCompany/:id", getCurrentCompany);
router.post("/user-signin", signin);
router.post("/user-signup", signup);
router.post("/companyDetails", companyDetails);
export default router;