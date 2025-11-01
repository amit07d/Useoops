import express from "express";
import { registerUser, loginUser } from '../controllers/auth-controllers.js';
import authMiddlewre from "../middleware/authMiddleWare.js";


const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)


export default router;




