import React from "react";

const ThoiKhoaBieu = () => {
  return (
    <div
      style={{
        background: "white",
        margin: 0,
        fontFamily: "Arial, sans-serif",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      {/* --- NHÓM NÚT --- */}
      <div
        style={{
          display: "flex",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        <button style={buttonStyle}>📅 Hiện tại</button>
        <button style={buttonStyle}>🖨 In lịch</button>
        <button style={buttonStyle}>⬅ Trở về</button>
        <button style={buttonStyle}>Tiếp ➡</button>
      </div>

      {/* TIÊU ĐỀ */}
      <div style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "15px" }}>
        Lịch học - Khoa CNTT
      </div>

      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={thStyle}>Ca học</th>
            <th style={thStyle}>Thứ 2 <br /> 25/8/2025</th>
            <th style={thStyle}>Thứ 3 <br /> 26/8/2025</th>
            <th style={thStyle}>Thứ 4 <br /> 27/8/2025</th>
            <th style={thStyle}>Thứ 5 <br /> 28/8/2025</th>
            <th style={thStyle}>Thứ 6 <br /> 29/8/2025</th>
            <th style={thStyle}>Thứ 7 <br /> 30/8/2025</th>
            <th style={thStyle}>CN <br /> 31/8/2025</th>
          </tr>
        </thead>

        <tbody>
          {/* Sáng */}
          <tr>
            <td style={caStyle}>Sáng</td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <div style={monHocStyle}>
                Đảm bảo chất lượng phần mềm<br />
                Lớp: CNTT2025A<br />
                Tiết: 1 - 3<br />
                Phòng: L604
              </div>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <div style={monHocStyle}>
                Cơ sở dữ liệu nâng cao<br />
                Lớp: CNTT2025A<br />
                Tiết: 1 - 5<br />
                Phòng: L501
              </div>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
          </tr>

          {/* Chiều */}
          <tr>
            <td style={caStyle}>Chiều</td>
            <td style={tdStyle}>
              <div style={monHocStyle}>
                Lập trình Web<br />
                Lớp: CNTT2025A<br />
                Tiết: 7 - 11<br />
                Phòng: L504
              </div>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <div style={monHocStyle}>
                Đảm bảo chất lượng phần mềm<br />
                Lớp: CNTT2025A<br />
                Tiết: 7 - 9<br />
                Phòng: L604
              </div>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}>
              <div style={monHocStyle}>
                Đồ án phát triển phần mềm<br />
                Lớp: CNTT2025A<br />
                Tiết: 7 - 11<br />
                Phòng: L608
              </div>
            </td>
            <td style={tdStyle}></td>
            <td style={tdStyle}></td>
          </tr>

          {/* Tối */}
          <tr>
            <td style={caStyle}>Tối</td>
            <td style={tdStyle} colSpan="7"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

/* --- STYLE OBJECTS --- */

const buttonStyle = {
  background: "#0a2e73",
  color: "white",
  border: "none",
  padding: "10px 18px",
  borderRadius: "10px",
  fontSize: "14px",
  cursor: "pointer",
  boxShadow: "0 2px 5px rgba(0,0,0,0.25)",
};

const thStyle = {
  background: "#0a2e73",
  color: "white",
  textAlign: "center",
  padding: "12px",
  border: "1px solid #ccc",
};

const tdStyle = {
  border: "1px solid #ccc",
  verticalAlign: "top",
  height: "120px",
  padding: "6px",
};

const caStyle = {
  background: "#fffacd",
  width: "70px",
  fontWeight: "bold",
  textAlign: "center",
  border: "1px solid #ccc",
};

const monHocStyle = {
  background: "#ffa8a9ff",
  padding: "8px",
  borderRadius: "6px",
  border: "1px solid #e08989ff",
  fontSize: "14px",
};

export default ThoiKhoaBieu;
