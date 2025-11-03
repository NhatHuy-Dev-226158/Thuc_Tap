import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';

// Kích hoạt biến môi trường
dotenv.config();

// Kết nối CSDL MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Đã kết nối thành công tới MongoDB!');
    })
    .catch((err) => {
        console.error('Lỗi kết nối MongoDB:', err);
    });

const app = express();

// --- Middleware ---
app.use(cors());
app.use(express.json());

// Route cơ bản để kiểm tra
app.get('/', (req, res) => {
    res.send('API server sườn đang chạy...');
});

// Khởi chạy server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server sườn đang chạy ở port ${PORT}`);
});