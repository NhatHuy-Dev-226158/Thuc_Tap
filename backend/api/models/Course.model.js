import mongoose from 'mongoose';

// Chi tiết lịch học hàng tuần
const TimeSlotSchema = new mongoose.Schema({
    thu: { type: String, required: true },
    buoi: { type: String, required: true },
    tiet: { type: String, required: true },
    loaiHoc: {
        type: String,
        enum: ['Lý thuyết', 'Thực hành', 'Trực tuyến'],
        default: 'Lý thuyết',
    },
    diaDiem: { // Phòng hoặc Link Meet
        type: String,
    },
});

// Lớp Học Phần
const CourseSchema = new mongoose.Schema({
    tenMonHoc: { type: String, required: true },
    maLopHocPhan: { type: String, required: true, unique: true },
    maLopChinh: { // Lớp chính 
        type: String,
        required: true,
    },
    giaoVien: { type: String },
    startDate: { type: Date, required: true }, // Ngày bắt đầu môn
    endDate: { type: Date, required: true },   // Ngày kết thúc môn
    lichHoc: [TimeSlotSchema], // Lịch cố định hàng tuần
}, { timestamps: true });

const Course = mongoose.model('Course', CourseSchema);
export default Course;