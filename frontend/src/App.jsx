import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// --- Import Layouts ---
import MainLayout from './layouts/MainLayout';

// --- Import Các Trang Public ---
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';
import LoginPage from "./pages/LoginPage";
import ThoiKhoaBieu from './pages/ThoiKhoaBieu.jsx';
import ExamSchedule from './pages/ExamSchedule/ExamSchedule';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* === CÁC ROUTE PUBLIC (Bọc bằng MainLayout) === */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/NewsPage" element={<NewsPage />} />
          <Route path="/thoi-khoa-bieu" element={<ThoiKhoaBieu />} />
          <Route path="/lich-thi" element={<ExamSchedule />} />
        </Route>
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="*" element={<h1>404 - Trang không tồn tại</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;