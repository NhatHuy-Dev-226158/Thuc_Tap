import express from 'express';
import { dangKy, dangNhap } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/dang-ky', dangKy);
router.post('/dang-nhap', dangNhap);

export default router;
