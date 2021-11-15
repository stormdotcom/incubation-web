import express from 'express';
import { getAllcompanyList, changePending, addSlots,getAllSlots, getAllUsers, setSlot, approve } from "../controllers/admin.js";
import router from './users.js';

router.get("/", getAllcompanyList)
router.post("/change-pending", changePending)
router.post("/add-slot", addSlots);

router.get("/get-slot/all", getAllSlots)

router.get("/get-user/all", getAllUsers)
router.post("/select-slot", setSlot)
router.post("/approve", approve)
export default router;