import { useState, useRef, useEffect } from 'react'
import './App.css'
import infographicImage from './assets/InfographicFinal.png'
import hitmapImage from './assets/InfographicHitmap.png'
import hoChiMinhCard from './assets/HỒ CHÍ MINH.png'
import maoZedongCard from './assets/MAO ZEDONG.png'
import fidelCastroCard from './assets/FIDEL CASTRO.png'
import cheGuevaraCard from './assets/CHE GUEVARA.png'
import kaysoneCard from './assets/Kaysone Phomvihane.png'
import vietnamImage from './assets/datnuocvietnam.jpg'
import chinaImage from './assets/datnuoctrungquoc.jpg'
import cubaImage from './assets/datnuocuba.jpg'
import laosImage from './assets/datnuoclao.png'
import logoMLN131 from './assets/logoMLN131.png'
import dangCongsanCard from './assets/dangcongsan.png'

interface HitmapObject {
  id: string;
  name: string;
  color: string; // Hex color như #ff0000
  data: {
    title: string;
    subtitle?: string;
    description: string;
    details: string[];
    type: 'leader' | 'symbol' | 'landmark' | 'flag';
  };
}

// Mapping màu hitmap sang object
const hitmapObjects: HitmapObject[] = [
  {
    id: 'ho-chi-minh',
    name: 'Hồ Chí Minh',
    color: '#ff0000', // Đỏ
    data: {
      title: 'HỒ CHÍ MINH',
      subtitle: 'Chủ tịch nước Việt Nam Dân chủ Cộng hòa',
      type: 'leader',
      description: 'Hồ Chí Minh (1890-1969) là nhà cách mạng, người sáng lập Đảng Cộng sản Việt Nam và là lãnh tụ vĩ đại của dân tộc Việt Nam.',
      details: [
        'Sinh ngày 19/5/1890 tại làng Kim Liên, huyện Nam Đàn, tỉnh Nghệ An',
        'Người sáng lập Đảng Cộng sản Việt Nam (1930)',
        'Lãnh đạo cuộc Cách mạng Tháng Tám thành công (1945)',
        'Đọc Tuyên ngôn Độc lập, khai sinh nước Việt Nam Dân chủ Cộng hòa',
        'Lãnh đạo cuộc kháng chiến chống Pháp và chống Mỹ',
        'Được UNESCO công nhận là Anh hùng giải phóng dân tộc, Danh nhân văn hóa thế giới'
      ]
    }
  },
  {
    id: 'mao-zedong',
    name: 'Mao Zedong',
    color: '#00ff00', // Xanh lá
    data: {
      title: 'MAO ZEDONG',
      subtitle: 'Chủ tịch Đảng Cộng sản Trung Quốc',
      type: 'leader',
      description: 'Mao Zedong (1893-1976) là nhà cách mạng, nhà lý luận chính trị và là người sáng lập nước Cộng hòa Nhân dân Trung Hoa.',
      details: [
        'Sinh ngày 26/12/1893 tại tỉnh Hồ Nam, Trung Quốc',
        'Người sáng lập Đảng Cộng sản Trung Quốc (1921)',
        'Lãnh đạo cuộc Trường Chinh (1934-1936)',
        'Tuyên bố thành lập nước Cộng hòa Nhân dân Trung Hoa (1949)',
        'Phát triển tư tưởng Mao Zedong - một bước phát triển của chủ nghĩa Mác-Lênin',
        'Lãnh đạo cuộc Cách mạng Văn hóa (1966-1976)'
      ]
    }
  },
  {
    id: 'fidel-castro',
    name: 'Fidel Castro',
    color: '#0000ff', // Xanh dương
    data: {
      title: 'FIDEL CASTRO',
      subtitle: 'Lãnh tụ cách mạng Cuba',
      type: 'leader',
      description: 'Fidel Castro (1926-2016) là nhà cách mạng, chính trị gia và là lãnh tụ của Cách mạng Cuba, người đã lãnh đạo Cuba trong hơn 5 thập kỷ.',
      details: [
        'Sinh ngày 13/8/1926 tại tỉnh Oriente, Cuba',
        'Lãnh đạo cuộc tấn công vào doanh trại Moncada (1953)',
        'Lãnh đạo phong trào 26 tháng 7',
        'Lật đổ chế độ độc tài Batista (1959)',
        'Thủ tướng Cuba (1959-1976), Chủ tịch Hội đồng Nhà nước (1976-2008)',
        'Xây dựng hệ thống y tế và giáo dục miễn phí cho toàn dân'
      ]
    }
  },
  {
    id: 'che-guevara',
    name: 'Che Guevara',
    color: '#ffff00', // Vàng
    data: {
      title: 'CHE GUEVARA',
      subtitle: 'Nhà cách mạng Cuba',
      type: 'leader',
      description: 'Ernesto "Che" Guevara (1928-1967) là nhà cách mạng, bác sĩ, nhà lý luận quân sự và là một trong những nhân vật quan trọng của Cách mạng Cuba.',
      details: [
        'Sinh ngày 14/6/1928 tại Rosario, Argentina',
        'Tham gia Cách mạng Cuba cùng Fidel Castro',
        'Tổng tư lệnh quân đội cách mạng Cuba',
        'Bộ trưởng Công nghiệp Cuba (1961-1965)',
        'Biểu tượng của phong trào cách mạng và chống đế quốc trên toàn thế giới',
        'Hy sinh ngày 9/10/1967 tại Bolivia trong cuộc chiến giải phóng dân tộc'
      ]
    }
  },
  {
    id: 'laos-leader',
    name: 'Kaysone Phomvihane',
    color: '#ff00ff', // Magenta
    data: {
      title: 'KAYSONE PHOMVIHANE',
      subtitle: 'Tổng Bí thư Đảng Nhân dân Cách mạng Lào',
      type: 'leader',
      description: 'Kaysone Phomvihane (1920-1992) là nhà cách mạng, chính trị gia và là người sáng lập Đảng Nhân dân Cách mạng Lào, lãnh tụ vĩ đại của cách mạng Lào.',
      details: [
        'Sinh ngày 13/12/1920 tại tỉnh Savannakhet, Lào',
        'Người sáng lập Đảng Nhân dân Cách mạng Lào (1955)',
        'Tổng Bí thư Đảng Nhân dân Cách mạng Lào (1955-1992)',
        'Thủ tướng Cộng hòa Dân chủ Nhân dân Lào (1975-1991)',
        'Chủ tịch nước Cộng hòa Dân chủ Nhân dân Lào (1991-1992)',
        'Lãnh đạo cuộc đấu tranh giải phóng dân tộc và xây dựng chủ nghĩa xã hội ở Lào'
      ]
    }
  },
  {
    id: 'hammer-sickle',
    name: 'Biểu tượng Đảng cộng sản',
    color: '#00ffff', // Cyan
    data: {
      title: 'BIỂU TƯỢNG ĐẢNG CỘNG SẢN',
      subtitle: 'Biểu tượng của Chủ nghĩa Cộng sản',
      type: 'symbol',
      description: 'Biểu tượng Búa và Liềm là biểu tượng quốc tế của chủ nghĩa cộng sản, đại diện cho sự đoàn kết giữa công nhân (búa) và nông dân (liềm).',
      details: [
        'Búa đại diện cho giai cấp công nhân công nghiệp',
        'Liềm đại diện cho giai cấp nông dân',
        'Biểu tượng của sự đoàn kết giữa hai giai cấp lao động chính',
        'Được sử dụng lần đầu tiên trong Cách mạng Nga (1917)',
        'Trở thành biểu tượng chính thức của Liên Xô và các nước xã hội chủ nghĩa',
        'Thể hiện tinh thần cách mạng và đấu tranh cho công bằng xã hội'
      ]
    }
  },
  {
    id: 'china-flag',
    name: 'Cờ Trung Quốc',
    color: '#ff8000', // Cam
    data: {
      title: 'TRUNG QUỐC',
      subtitle: 'Chủ nghĩa xã hội đặc sắc Trung Quốc',
      type: 'flag',
      description: 'Khẳng định sự lãnh đạo tuyệt đối và toàn diện của Đảng Cộng sản Trung Quốc đối với mọi mặt của đời sống xã hội. Tập trung vào mục tiêu "Phục hưng dân tộc".',
      details: [
        'Hệ thống chính trị: Khẳng định sự lãnh đạo tuyệt đối và toàn diện của Đảng Cộng sản Trung Quốc đối với mọi mặt của đời sống xã hội. Tập trung vào mục tiêu "Phục hưng dân tộc".',
        'Kinh tế: Mô hình kinh tế thị trường XHCN với quy mô khổng lồ. Trung Quốc tận dụng triệt để hội nhập quốc tế và thu hút đầu tư nước ngoài để trở thành "công xưởng thế giới".',
        'Điểm đặc thù: Hiện đại hóa thần tốc và quản trị quốc gia bằng công nghệ cao. Hiện nay, Trung Quốc đang chuyển dịch mạnh mẽ sang chiến lược "Thịnh vượng chung" để giảm khoảng cách giàu nghèo và thúc đẩy đổi mới sáng tạo cốt lõi.'
      ]
    }
  },
  {
    id: 'cuba-flag',
    name: 'Cờ Cuba',
    color: '#8000ff', // Tím
    data: {
      title: 'CUBA',
      subtitle: 'Kiên trì con đường Cách mạng',
      type: 'flag',
      description: 'Duy trì sự thống nhất tư tưởng cao độ dưới sự lãnh đạo của Đảng Cộng sản Cuba, tập trung bảo vệ các thành quả của Cách mạng và chủ quyền quốc gia.',
      details: [
        'Hệ thống chính trị: Duy trì sự thống nhất tư tưởng cao độ dưới sự lãnh đạo của Đảng Cộng sản Cuba, tập trung bảo vệ các thành quả của Cách mạng và chủ quyền quốc gia.',
        'Kinh tế: Vẫn duy trì nền kinh tế kế hoạch hóa là chủ đạo. Tuy nhiên, những năm gần đây đã có những bước "Cập nhật mô hình kinh tế", cho phép kinh tế tư nhân nhỏ (cuentapropistas) phát triển ở một số lĩnh vực dịch vụ.',
        'Điểm đặc thù: Bất chấp lệnh cấm vận kéo dài, Cuba đạt được những thành tựu vượt bậc về Y tế và Giáo dục. Chỉ số phát triển con người (HDI) cao và là nước xuất khẩu chuyên gia y tế hàng đầu thế giới.'
      ]
    }
  },
  {
    id: 'laos-flag',
    name: 'Cờ Lào',
    color: '#0080ff', // Xanh dương đậm
    data: {
      title: 'LÀO',
      subtitle: 'Đổi mới dựa trên bản sắc dân tộc',
      type: 'flag',
      description: 'Đảng Nhân dân Cách mạng Lào lãnh đạo. Chú trọng sự đồng thuận xã hội và vai trò của Mặt trận Lào xây dựng đất nước.',
      details: [
        'Hệ thống chính trị: Đảng Nhân dân Cách mạng Lào lãnh đạo. Chú trọng sự đồng thuận xã hội và vai trò của Mặt trận Lào xây dựng đất nước.',
        'Kinh tế: Thực hiện chính sách "Cơ chế quản lý kinh tế mới", chuyển sang kinh tế thị trường có sự điều tiết của Nhà nước. Tận dụng ưu thế về tài nguyên thiên nhiên (thủy điện) và vị trí kết nối đất liền.',
        'Điểm đặc thù: Phát triển đất nước gắn liền chặt chẽ với việc bảo tồn văn hóa Phật giáo và tinh thần đoàn kết giữa các bộ tộc. Lào chú trọng sự ổn định bền vững và giữ gìn bản sắc truyền thống trong quá trình hiện đại hóa.'
      ]
    }
  },
  {
    id: 'vietnam-flag',
    name: 'Cờ Việt Nam',
    color: '#ff0080', // Hồng
    data: {
      title: 'VIỆT NAM',
      subtitle: 'Mô hình Kinh tế thị trường định hướng XHCN',
      type: 'flag',
      description: 'Việt Nam vận hành theo cơ chế "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ". Tập trung xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân và vì nhân dân.',
      details: [
        'Hệ thống chính trị: Vận hành theo cơ chế "Đảng lãnh đạo, Nhà nước quản lý, Nhân dân làm chủ". Tập trung xây dựng Nhà nước pháp quyền XHCN của nhân dân, do nhân dân và vì nhân dân.',
        'Kinh tế: Chuyển đổi từ kinh tế kế hoạch tập trung sang kinh tế thị trường đa thành phần. Trong đó, kinh tế nhà nước giữ vai trò chủ đạo, nhưng kinh tế tư nhân được xác định là một động lực quan trọng của nền kinh tế.',
        'Điểm đặc thù: Công cuộc "Đổi mới" (1986) đã thay đổi diện mạo quốc gia. Việt Nam đặc biệt nhấn mạnh việc phát triển kinh tế phải đi đôi với công bằng xã hội, không "hy sinh" môi trường và an sinh xã hội để chạy theo tăng trưởng đơn thuần.'
      ]
    }
  }
];

// Hàm chuyển đổi hex color sang RGB
function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
}

// Hàm so sánh màu (có tolerance để xử lý anti-aliasing)
function colorsMatch(
  r1: number, g1: number, b1: number,
  r2: number, g2: number, b2: number,
  tolerance: number = 10
): boolean {
  return Math.abs(r1 - r2) <= tolerance &&
         Math.abs(g1 - g2) <= tolerance &&
         Math.abs(b1 - b2) <= tolerance;
}

// Mapping leader IDs to card images
const leaderCardImages: { [key: string]: string } = {
  'ho-chi-minh': hoChiMinhCard,
  'mao-zedong': maoZedongCard,
  'fidel-castro': fidelCastroCard,
  'che-guevara': cheGuevaraCard,
  'laos-leader': kaysoneCard,
  'hammer-sickle': dangCongsanCard,
};

function App() {
  const [selectedObject, setSelectedObject] = useState<HitmapObject | null>(null);
  const [hoveredObject, setHoveredObject] = useState<HitmapObject | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const imageRef = useRef<HTMLImageElement>(null);
  const hitmapCanvasRef = useRef<HTMLCanvasElement>(null);
  const [hitmapLoaded, setHitmapLoaded] = useState(false);

  // Load hitmap image và kiểm tra tỉ lệ với ảnh gốc
  useEffect(() => {
    const loadHitmap = async () => {
      try {
        // Load cả ảnh gốc và hitmap để so sánh kích thước
        const mainImg = new Image();
        const hitmapImg = new Image();
        
        mainImg.crossOrigin = 'anonymous';
        hitmapImg.crossOrigin = 'anonymous';
        
        mainImg.src = infographicImage;
        hitmapImg.src = hitmapImage;
        
        Promise.all([
          new Promise((resolve) => { mainImg.onload = resolve; }),
          new Promise((resolve) => { hitmapImg.onload = resolve; })
        ]).then(() => {
          const canvas = hitmapCanvasRef.current;
          if (canvas) {
            // Đảm bảo canvas có cùng kích thước với ảnh gốc để đảm bảo tỉ lệ chính xác
            // Scale hitmap để khớp với kích thước ảnh gốc
            canvas.width = mainImg.width;
            canvas.height = mainImg.height;
            const ctx = canvas.getContext('2d');
            if (ctx) {
              // Vẽ hitmap lên canvas với kích thước bằng ảnh gốc
              // Điều này đảm bảo tỉ lệ chính xác 1:1 giữa hitmap và ảnh gốc
              ctx.drawImage(hitmapImg, 0, 0, mainImg.width, mainImg.height);
              
              // Kiểm tra và log thông tin
              if (mainImg.width !== hitmapImg.width || mainImg.height !== hitmapImg.height) {
                console.log('Hitmap được scale để khớp với ảnh gốc:', {
                  image: { width: mainImg.width, height: mainImg.height },
                  hitmapOriginal: { width: hitmapImg.width, height: hitmapImg.height },
                  hitmapScaled: { width: mainImg.width, height: mainImg.height }
                });
              } else {
                console.log('Hitmap và ảnh gốc có cùng kích thước:', {
                  width: mainImg.width,
                  height: mainImg.height
                });
              }
              
              setHitmapLoaded(true);
            }
          }
        });
        
        mainImg.onerror = () => {
          console.error('Failed to load main image');
          setHitmapLoaded(false);
        };
        
        hitmapImg.onerror = () => {
          console.warn('Failed to load hitmap image:', hitmapImage);
          setHitmapLoaded(false);
        };
      } catch (error) {
        console.error('Error loading hitmap:', error);
        setHitmapLoaded(false);
      }
    };

    loadHitmap();
  }, []);

  // Hàm lấy object từ pixel tại vị trí click
  // x, y là tọa độ trên ảnh gốc (naturalWidth x naturalHeight)
  const getObjectAtPosition = (x: number, y: number): HitmapObject | null => {
    const canvas = hitmapCanvasRef.current;
    if (!canvas || !hitmapLoaded) return null;

    const ctx = canvas.getContext('2d');
    if (!ctx) return null;

    // Canvas đã được scale để khớp với ảnh gốc, nên tọa độ trực tiếp
    const finalX = Math.max(0, Math.min(Math.floor(x), canvas.width - 1));
    const finalY = Math.max(0, Math.min(Math.floor(y), canvas.height - 1));

    // Lấy pixel data từ hitmap
    const imageData = ctx.getImageData(finalX, finalY, 1, 1);
    const [r, g, b] = imageData.data;

    // So sánh với các màu trong hitmapObjects
    for (const obj of hitmapObjects) {
      const rgb = hexToRgb(obj.color);
      if (rgb && colorsMatch(r, g, b, rgb.r, rgb.g, rgb.b)) {
        return obj;
      }
    }

    return null;
  };

  // Xử lý click trên ảnh
  const handleImageClick = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imageRef.current;
    if (!img || !hitmapLoaded || !img.complete) return;

    const rect = img.getBoundingClientRect();
    
    // Tính toán vị trí click trên ảnh gốc (natural size)
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;

    // Vị trí click trên ảnh gốc (pixel coordinates)
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Đảm bảo tọa độ hợp lệ
    if (x < 0 || y < 0 || x >= img.naturalWidth || y >= img.naturalHeight) {
      return;
    }

    const obj = getObjectAtPosition(x, y);
    if (obj) {
      setSelectedObject(obj);
    }
  };

  // Xử lý hover trên ảnh
  const handleImageMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const img = imageRef.current;
    if (!img || !hitmapLoaded || !img.complete) {
      setHoveredObject(null);
      return;
    }

    const rect = img.getBoundingClientRect();
    
    // Lưu vị trí chuột để hiển thị tooltip
    setMousePosition({
      x: e.clientX,
      y: e.clientY
    });
    
    // Tính toán vị trí hover trên ảnh gốc (natural size)
    const scaleX = img.naturalWidth / rect.width;
    const scaleY = img.naturalHeight / rect.height;

    // Vị trí hover trên ảnh gốc (pixel coordinates)
    const x = Math.floor((e.clientX - rect.left) * scaleX);
    const y = Math.floor((e.clientY - rect.top) * scaleY);

    // Đảm bảo tọa độ hợp lệ
    if (x < 0 || y < 0 || x >= img.naturalWidth || y >= img.naturalHeight) {
      setHoveredObject(null);
      return;
    }

    const obj = getObjectAtPosition(x, y);
    setHoveredObject(obj || null);
  };

  const closeModal = () => {
    setSelectedObject(null);
  };

  // Tắt scroll bar khi modal mở
  useEffect(() => {
    if (selectedObject) {
      // Lưu lại scroll position hiện tại
      const scrollY = window.scrollY;
      // Tắt scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Bật lại scroll
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      // Khôi phục scroll position
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup function
    return () => {
      if (!selectedObject) {
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.body.style.overflow = '';
      }
    };
  }, [selectedObject]);

  return (
    <div className="app-museum">
      {/* Museum Header */}
      <header className="museum-header">
        <div className="header-inner">
          <div className="header-emblem">
            <div className="emblem-circle">
              <img 
                src={logoMLN131} 
                alt="Logo MLN131" 
                className="logo-svg"
              />
            </div>
          </div>
          <div className="header-text">
            <h1 className="museum-title">MLN131 - Chủ nghĩa xã hội khoa học</h1>
            <p className="museum-subtitle">SO SÁNH MÔ HÌNH TRUNG QUỐC, CUBA, VIỆT NAM, LÀO</p>
          </div>
        </div>
      </header>

      {/* Main Gallery */}
      <main className="museum-gallery">
        {/* Picture Frame */}
        <div className="picture-frame">
          <div className="frame-outer">
            <div className="frame-inner">
              <div 
                className="frame-content"
                style={{
                  cursor: hoveredObject ? 'pointer' : 'default'
                }}
              >
                <div className="image-container-museum">
                  <img 
                    ref={imageRef}
                    src={infographicImage} 
                    alt="Infographic về Chủ nghĩa Xã hội" 
                    className="infographic-museum"
                    draggable={false}
                    onClick={handleImageClick}
                    onMouseMove={handleImageMouseMove}
                  />
                  
                  <canvas 
                    ref={hitmapCanvasRef}
                    style={{ display: 'none' }}
                  />

                  {hoveredObject && (
                    <div 
                      className="hover-indicator-museum"
                      style={{
                        left: `${mousePosition.x}px`,
                        top: `${mousePosition.y}px`
                      }}
                    >
                      <div className="hover-label-museum">
                        {hoveredObject.name}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          
          {/* Frame Label */}
          <div className="frame-label">
            <div className="label-plaque">
              <span className="plaque-text">Infographic Tương tác</span>
              <span className="plaque-hint">Click vào các nhân vật, cờ và biểu tượng để xem thông tin</span>
            </div>
          </div>
        </div>
      </main>


      {/* Museum Modal */}
      {selectedObject && (
        <div className="modal-overlay-museum" onClick={closeModal}>
          <div className={`modal-content-museum ${(selectedObject.data.type === 'leader' || selectedObject.id === 'hammer-sickle') ? 'modal-card' : (selectedObject.id === 'vietnam-flag' || selectedObject.id === 'china-flag' || selectedObject.id === 'cuba-flag' || selectedObject.id === 'laos-flag') ? 'modal-vietnam' : ''}`} onClick={(e) => e.stopPropagation()}>
            {((selectedObject.data.type === 'leader' || selectedObject.id === 'hammer-sickle') && leaderCardImages[selectedObject.id]) ? (
              <div className="modal-card-container">
                <img 
                  src={leaderCardImages[selectedObject.id]} 
                  alt={selectedObject.data.title}
                  className="leader-card-image"
                />
              </div>
            ) : selectedObject.id === 'vietnam-flag' || selectedObject.id === 'china-flag' || selectedObject.id === 'cuba-flag' || selectedObject.id === 'laos-flag' ? (
              <div className="modal-vietnam-container">
                <div className="vietnam-image-section">
                  <img 
                    src={
                      selectedObject.id === 'vietnam-flag' ? vietnamImage : 
                      selectedObject.id === 'china-flag' ? chinaImage : 
                      selectedObject.id === 'cuba-flag' ? cubaImage :
                      laosImage
                    } 
                    alt={
                      selectedObject.id === 'vietnam-flag' ? "Đất nước Việt Nam" : 
                      selectedObject.id === 'china-flag' ? "Đất nước Trung Quốc" : 
                      selectedObject.id === 'cuba-flag' ? "Đất nước Cuba" :
                      "Đất nước Lào"
                    }
                    className="vietnam-country-image"
                  />
                </div>
                <div className="vietnam-content-section">
                  <div className={`modal-header-museum ${selectedObject.data.type}`}>
                    <h2 className="modal-title-museum">{selectedObject.data.title}</h2>
                    {selectedObject.data.subtitle && (
                      <h3 className="modal-subtitle-museum">{selectedObject.data.subtitle}</h3>
                    )}
                  </div>
                  
                  <div className="modal-description-museum">
                    <p>{selectedObject.data.description}</p>
                  </div>
                  
                  <div className="modal-body-museum">
                    <h4 className="details-title-museum">Chi tiết</h4>
                    <div className="details-list-museum">
                      {selectedObject.data.details.map((detail, index) => (
                        <div key={index} className="modal-item-museum">
                          <div className="detail-star">★</div>
                          <p>{detail}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                <div className={`modal-header-museum ${selectedObject.data.type}`}>
                  <div className="modal-emblem-museum">⚒️</div>
                  <h2 className="modal-title-museum">{selectedObject.data.title}</h2>
                  {selectedObject.data.subtitle && (
                    <h3 className="modal-subtitle-museum">{selectedObject.data.subtitle}</h3>
                  )}
                </div>
                
                <div className="modal-description-museum">
                  <p>{selectedObject.data.description}</p>
                </div>
                
                <div className="modal-body-museum">
                  <h4 className="details-title-museum">Chi tiết</h4>
                  <div className="details-list-museum">
                    {selectedObject.data.details.map((detail, index) => (
                      <div key={index} className="modal-item-museum">
                        <div className="detail-star">★</div>
                        <p>{detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default App
