# Hướng dẫn tạo Hitmap cho Pixel-Perfect Click

## Tổng quan

Hitmap là một ảnh ẩn cùng kích thước với ảnh infographic, mỗi vật thể được tô bằng một màu ID riêng. Khi user click, hệ thống sẽ đọc pixel tại vị trí click và map màu đó ra object tương ứng.

## Cách tạo Hitmap

### Bước 1: Mở ảnh gốc trong Photoshop/Figma/GIMP

1. Mở file `InfographicFinal.png` trong phần mềm chỉnh sửa ảnh
2. Tạo một layer mới (đặt tên là "Hitmap")

### Bước 2: Tô màu từng vật thể

Sử dụng công cụ Brush hoặc Paint Bucket để tô từng vật thể bằng màu tương ứng:

| Vật thể | Màu Hex | RGB |
|---------|---------|-----|
| Hồ Chí Minh | `#ff0000` | Red |
| Mao Zedong | `#00ff00` | Green |
| Fidel Castro | `#0000ff` | Blue |
| Che Guevara | `#ffff00` | Yellow |
| Lãnh đạo Lào | `#ff00ff` | Magenta |
| Biểu tượng Búa Liềm | `#00ffff` | Cyan |
| Cờ Trung Quốc | `#ff8000` | Orange |
| Cờ Cuba | `#8000ff` | Purple |
| Cờ Lào | `#0080ff` | Dark Blue |
| Cờ Việt Nam | `#ff0080` | Pink |

### Bước 3: Tô màu phẳng

- **Quan trọng**: Mỗi vật thể phải được tô bằng **một màu phẳng duy nhất**
- Không có gradient, không có shadow, không có anti-aliasing
- Tô kín toàn bộ vật thể, kể cả các chi tiết nhỏ

### Bước 4: Xóa background

- Background (nền) để trong suốt hoặc màu đen `#000000`
- Chỉ giữ lại các vật thể với màu tương ứng

### Bước 5: Export

1. Export layer "Hitmap" thành file PNG
2. Đặt tên: `InfographicHitmap.png`
3. **Quan trọng**: Kích thước phải **chính xác** bằng với `InfographicFinal.png`
4. Lưu vào thư mục `src/assets/`

## Cách sử dụng trong code

Sau khi tạo hitmap, uncomment dòng import trong `App.tsx`:

```typescript
import hitmapImage from './assets/InfographicHitmap.png'
```

Và uncomment phần load hitmap trong `useEffect`:

```typescript
const hitmapImg = new Image();
hitmapImg.crossOrigin = 'anonymous';
hitmapImg.src = hitmapImage;

hitmapImg.onload = () => {
  const canvas = hitmapCanvasRef.current;
  if (canvas) {
    canvas.width = hitmapImg.width;
    canvas.height = hitmapImg.height;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      ctx.drawImage(hitmapImg, 0, 0);
      setHitmapLoaded(true);
    }
  }
};
```

## Tips

1. **Độ chính xác**: Tô càng chính xác càng tốt, đặc biệt là các chi tiết nhỏ
2. **Màu sắc**: Sử dụng màu sáng, dễ phân biệt
3. **Kích thước**: Đảm bảo hitmap có cùng kích thước với ảnh gốc
4. **Testing**: Sau khi tạo, test click vào từng vật thể để đảm bảo hoạt động đúng

## Troubleshooting

- **Click không hoạt động**: Kiểm tra xem hitmap đã load chưa (check console)
- **Click sai vật thể**: Kiểm tra màu sắc trong hitmap có đúng không
- **Không detect được**: Có thể do anti-aliasing, tăng tolerance trong hàm `colorsMatch`
