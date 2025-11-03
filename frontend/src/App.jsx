import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Layouts ---
import MainLayout from './layouts/MainLayout';

// --- Import Các Trang Public ---
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === CÁC ROUTE PUBLIC (Bọc bằng MainLayout) === */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/login" element={<LoginPage />} />
            <Route path="/thoi-khoa-bieu" element={<TimeTablePage />} />
            <Route path="/lich-thi" element={<ExamPage />} /> */}
        </Route>
        {/* Route cho 404 (Không tìm thấy) */}
        <Route path="*" element={<h1>404 - Trang không tồn tại</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;