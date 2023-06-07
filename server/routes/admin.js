import express from "express";

const router = express.Router();
import { adminLogin, registerAdmin } from "../controllers/admin.js";


router.post('/login-admin', adminLogin);
router.post('/register-admin', registerAdmin);

export default router;