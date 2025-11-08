import jwt from 'jsonwebtoken';

/**
 *Hàm xác thực người dùng (kiểm tra token)
 */
export const xacThucNguoiDung = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // dạng: "Bearer <token>"
  if (!token) {
    return res.status(401).json({ message: 'Bạn chưa đăng nhập!' });
  }

  try {
    // Giải mã token để lấy thông tin người dùng
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'matkhau_bimat');
    req.user = decoded; // Gắn thông tin người dùng vào request
    next();
  } catch (err) {
    res.status(403).json({ message: 'Token không hợp lệ hoặc đã hết hạn.' });
  }
};

/**
 * Hàm xác thực quyền quản trị (admin)
 */
export const xacThucAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    next(); // Cho phép truy cập
  } else {
    res.status(403).json({ message: 'Chỉ quản trị viên mới có thể truy cập.' });
  }
};
