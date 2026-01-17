# 🎓 MLN131 - Chủ nghĩa Xã hội Khoa học

<div align="center">

![MLN131 Logo](./src/assets/logoMLN131.png)

**Trang web tương tác so sánh mô hình Chủ nghĩa Xã hội của các quốc gia**

[![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

</div>

---

## 📖 Giới thiệu

**MLN131** là một ứng dụng web tương tác được thiết kế để trình bày và so sánh các mô hình Chủ nghĩa Xã hội của các quốc gia: **Trung Quốc**, **Cuba**, **Việt Nam**, và **Lào**. Dự án sử dụng công nghệ hitmap pixel-perfect để tạo trải nghiệm tương tác độc đáo với infographic.

### ✨ Tính năng nổi bật

- 🖼️ **Infographic tương tác** - Click vào bất kỳ đối tượng nào trên infographic để xem thông tin chi tiết
- 🎯 **Hitmap pixel-perfect** - Công nghệ hitmap chính xác từng pixel, cho phép click vào các đối tượng phức tạp
- 🏛️ **Thiết kế museum-like** - Giao diện sang trọng, vintage với màu sắc đỏ-vàng-trắng đặc trưng
- 🖼️ **Khung tranh vintage** - Infographic được đặt trong khung tranh trang trí tinh tế
- 👥 **Thông tin lãnh đạo** - Xem thông tin chi tiết về các nhân vật lịch sử quan trọng
- 🚩 **Thông tin quốc gia** - Tìm hiểu về hệ thống chính trị, kinh tế và đặc thù của từng quốc gia
- 🎨 **Hover tooltip** - Tooltip hiển thị tên đối tượng khi di chuột qua
- 📱 **Responsive design** - Tương thích với nhiều kích thước màn hình

## 🎨 Giao diện

Dự án sử dụng thiết kế **museum-like** với:
- Màu sắc chủ đạo: Đỏ, Vàng, Trắng (màu sắc đặc trưng của Chủ nghĩa Xã hội)
- Khung tranh vintage với nhiều lớp border và shadow
- Typography: Sans-serif (Inter) cho giao diện hiện đại
- Animation mượt mà và tối ưu hiệu năng

## 🛠️ Công nghệ sử dụng

- **React 18+** - Thư viện UI
- **TypeScript** - Type safety
- **Vite** - Build tool nhanh
- **HTML5 Canvas** - Xử lý hitmap pixel-perfect
- **CSS3** - Styling và animation

## 📦 Cài đặt

### Yêu cầu

- Node.js 18+ 
- npm hoặc yarn

### Các bước cài đặt

1. **Clone repository**
```bash
git clone <repository-url>
cd MLN131/mln131
```

2. **Cài đặt dependencies**
```bash
npm install
```

3. **Chạy development server**
```bash
npm run dev
```

4. **Build cho production**
```bash
npm run build
```

5. **Preview production build**
```bash
npm run preview
```

## 🎮 Cách sử dụng

1. **Xem infographic**: Scroll để xem toàn bộ infographic trong khung tranh
2. **Hover**: Di chuột qua các đối tượng để xem tooltip
3. **Click**: Click vào bất kỳ đối tượng nào để xem thông tin chi tiết:
   - **Lãnh đạo**: Hiển thị card hình ảnh của nhân vật
   - **Cờ quốc gia**: Hiển thị hình ảnh đất nước và thông tin chi tiết
   - **Biểu tượng**: Hiển thị thông tin về biểu tượng
4. **Đóng modal**: Click bên ngoài modal để đóng

## 📁 Cấu trúc dự án

```
mln131/
├── src/
│   ├── assets/          # Hình ảnh và tài nguyên
│   │   ├── InfographicFinal.png    # Infographic chính
│   │   ├── InfographicHitmap.png   # Hitmap cho tương tác
│   │   ├── logoMLN131.png          # Logo dự án
│   │   ├── dangcongsan.png         # Card Đảng Cộng sản
│   │   ├── datnuocvietnam.jpg     # Hình ảnh Việt Nam
│   │   ├── datnuoctrungquoc.jpg   # Hình ảnh Trung Quốc
│   │   ├── datnuocuba.jpg         # Hình ảnh Cuba
│   │   ├── datnuoclao.png         # Hình ảnh Lào
│   │   └── [Leader cards]         # Card các nhân vật lịch sử
│   ├── App.tsx          # Component chính
│   ├── App.css          # Styles chính
│   └── main.tsx         # Entry point
├── public/              # Static files
├── package.json
└── README.md
```

## 🎯 Tính năng chi tiết

### Hitmap System
- Sử dụng HTML5 Canvas để đọc pixel từ hitmap image
- Mỗi đối tượng có màu ID riêng trong hitmap
- Click detection chính xác từng pixel
- Hỗ trợ hover highlight

### Modal System
- Modal với animation mượt mà
- Tự động tắt scroll bar khi mở modal
- Hỗ trợ nhiều loại nội dung:
  - Leader cards (hình ảnh)
  - Country info (hình ảnh + text)
  - Symbol info (text)

### Performance
- Tối ưu animation và transition
- GPU acceleration cho transform
- Lazy loading cho hình ảnh
- Optimized CSS với will-change

## 🎓 Nội dung giáo dục

Dự án trình bày thông tin về:

### Các quốc gia
- 🇻🇳 **Việt Nam**: Mô hình Kinh tế thị trường định hướng XHCN
- 🇨🇳 **Trung Quốc**: Chủ nghĩa xã hội đặc sắc Trung Quốc
- 🇨🇺 **Cuba**: Kiên trì con đường Cách mạng
- 🇱🇦 **Lào**: Đổi mới dựa trên bản sắc dân tộc

### Nhân vật lịch sử
- Hồ Chí Minh
- Mao Zedong
- Fidel Castro
- Che Guevara
- Kaysone Phomvihane

## 🤝 Đóng góp

Mọi đóng góp đều được chào đón! Vui lòng:
1. Fork dự án
2. Tạo feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Mở Pull Request

## 📝 License

Dự án này được phân phối dưới giấy phép MIT. Xem file `LICENSE` để biết thêm chi tiết.

## 👨‍💻 Tác giả

**MLN131 Team**

---

<div align="center">

**Made with ❤️ for Education**

⭐ Star this repo if you find it helpful!

</div>
