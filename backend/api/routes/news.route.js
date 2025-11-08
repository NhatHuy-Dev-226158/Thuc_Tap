import express from 'express';
import {
  layTatCaTin,
  layTinTheoSlug,
  taoTinMoi,
  capNhatTin,
  xoaTin
} from '../controllers/news.controller.js';
import { xacThucNguoiDung, xacThucAdmin } from '../middleware/auth.middleware.js';

const router = express.Router();

// Public (ai cũng xem được)
router.get('/', layTatCaTin);
router.get('/:slug', layTinTheoSlug);

// Admin (phải đăng nhập và có quyền admin)
router.post('/', xacThucNguoiDung, xacThucAdmin, taoTinMoi);
router.put('/:id', xacThucNguoiDung, xacThucAdmin, capNhatTin);
router.delete('/:id', xacThucNguoiDung, xacThucAdmin, xoaTin);

export default router;
