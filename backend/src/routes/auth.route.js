import express from "express";
import {protectRoute} from "../middleware/auth.middleware.js"

const router = express.Router();
router.get("/check",protectRoute)

export default router   