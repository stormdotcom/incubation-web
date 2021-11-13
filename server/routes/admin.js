import express from 'express';
import { getAllcompanyList, changePending, addSlots,getAllSlots, getAllUsers, setSlot } from "../controllers/admin.js";
import router from './users.js';

router.get("/", getAllcompanyList)
router.post("/change-pending", changePending)
router.post("/add-slot", addSlots)
router.get("/get-slot", getAllSlots)
router.get("/get-alluser", getAllUsers)
router.post("/select-slot", setSlot)
export default router;