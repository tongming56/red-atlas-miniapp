import { ArrowLeft, Search, Navigation, MapPin, Phone, Clock } from 'lucide-react';
import BottomNav from './BottomNav';
import mapBackground from "figma:asset/d8c0e6c8797db98d87a1ec817d12d75a1c26e3a0.png";

export default function MapPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#e8e4dc] overflow-hidden">
      {/* 顶部搜索栏 */}
      <div className="absolute top-0 left-0 w-full z-40 bg-white shadow-[0_1px_3px_rgba(0,0,0,0.05)] pt-12 pb-3 px-4">
        <div className="flex items-center gap-3 w-full">
          {/* 搜索框 */}
          <div className="flex-1 h-10 bg-neutral-100 rounded-full flex items-center px-4 gap-2 border border-transparent focus-within:border-[#d41111]/20 focus-within:bg-white transition-all">
            <Search className="w-5 h-5 text-neutral-400" />
            <input
              className="flex-1 bg-transparent border-none p-0 text-sm focus:ring-0 text-neutral-900 placeholder-neutral-400 leading-normal h-full outline-none"
              placeholder="搜索站点..."
              type="text"
            />
          </div>

          {/* 区域筛选按钮 */}
          <button className="h-10 px-4 rounded-full border border-neutral-200 bg-white flex items-center gap-1 shrink-0 active:bg-neutral-50 transition-colors shadow-sm">
            <span className="text-sm font-medium text-neutral-700">区域</span>
            <Navigation className="w-4.5 h-4.5 text-neutral-400" />
          </button>

          {/* 城市筛选按钮 */}
          <button className="h-10 px-4 rounded-full border border-neutral-200 bg-white flex items-center gap-1 shrink-0 active:bg-neutral-50 transition-colors shadow-sm">
            <span className="text-sm font-medium text-neutral-700">城市</span>
            <Navigation className="w-4.5 h-4.5 text-neutral-400" />
          </button>
        </div>
      </div>

      {/* 地图区域 */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center opacity-90"
          style={{
            backgroundImage: `url(${mapBackground})`,
            filter: 'grayscale(0.3) sepia(0.15) contrast(1.05) brightness(1.05)'
          }}
        >
          {/* 地图标记点 */}
          {/* 标记1 - 左侧 */}
          <div className="absolute top-[25%] left-[20%] -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform drop-shadow-md opacity-90">
            <svg className="w-12 h-12 text-[#d41111]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* 标记2 - 右上 */}
          <div className="absolute top-[20%] left-[65%] -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform drop-shadow-md opacity-90">
            <svg className="w-12 h-12 text-[#d41111]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>

          {/* 标记3 - 中心高亮（苏维埃政府旧址） */}
          <div className="absolute top-[35%] left-[45%] -translate-x-1/2 -translate-y-full flex flex-col items-center cursor-pointer group z-20">
            <div className="relative drop-shadow-xl transition-transform group-hover:scale-110">
              <svg className="w-14 h-14 text-[#d41111]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              {/* 星星图标 */}
              <svg className="w-4 h-4 text-white absolute top-[0.8rem] left-1/2 -translate-x-1/2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <div className="mt-1 px-2.5 py-1 bg-white rounded-lg shadow-md border border-neutral-100 animate-bounce-slight">
              <p className="text-xs font-bold text-[#d41111] whitespace-nowrap">苏维埃政府旧址</p>
            </div>
          </div>

          {/* 标记4 - 右侧 */}
          <div className="absolute top-[48%] left-[75%] -translate-x-1/2 -translate-y-full cursor-pointer hover:scale-110 transition-transform drop-shadow-md opacity-90">
            <svg className="w-12 h-12 text-[#d41111]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
          </div>
        </div>
      </div>

      {/* 右侧悬浮按钮 */}
      <div className="absolute right-4 bottom-[calc(40%+20px)] z-20 flex flex-col gap-3">
        <button className="size-11 rounded-full bg-white text-neutral-700 shadow-[0_4px_12px_rgba(0,0,0,0.12)] flex items-center justify-center active:scale-95 transition-transform border border-neutral-100">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
          </svg>
        </button>
        <button className="size-11 rounded-full bg-[#d41111] text-white shadow-[0_4px_12px_rgba(212,17,17,0.3)] flex items-center justify-center active:scale-95 transition-transform">
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        </button>
      </div>

      {/* 底部抽屉卡片 */}
      <div className="absolute bottom-[56px] left-0 w-full h-[40%] bg-[#f8f6f6] rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)] flex flex-col z-30 overflow-hidden ring-1 ring-black/5">
        {/* 拖拽指示器 */}
        <div className="w-full h-7 flex items-center justify-center shrink-0 bg-white border-b border-neutral-50">
          <div className="w-10 h-1 rounded-full bg-neutral-300"></div>
        </div>

        {/* 标题栏 */}
        <div className="px-5 py-3 bg-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-5 bg-[#d41111] rounded-full"></span>
            <h2 className="text-lg font-bold text-neutral-900">附近站点</h2>
          </div>
          <button className="text-[#d41111] text-sm font-medium hover:opacity-80 transition-opacity">
            查看全部
          </button>
        </div>

        {/* 站点列表 */}
        <div className="flex-1 overflow-y-auto px-5 pb-8 space-y-3 bg-[#f8f6f6] pt-3 no-scrollbar">
          {/* 站点1 - 苏维埃政府旧址 */}
          <div 
            onClick={() => onNavigate('详情')}
            className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform cursor-pointer"
          >
            <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-200">
              <img
                alt="苏维埃政府旧址"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD22Rhi_kgu_C1E9kJw-qiZd8GXvKomEIX687lg1TcOuOiYrvJqRNct9XDkxRlvTamcUx_4oLH3shxKgFbDI_Ihnnblt-e2-cFc4ffKM7CSYuJ_tt766wzxmcQ4-CCmEoCp4famuRnWOYWtR96th_HdvugRWyspSpq_nLlQvyqfT-TtJd1zrvlnLAzgyk_zdP3qjSZrlDgVBemSt5rB_FyKRm73L7nCVK74NqwZGud6LaHkGHejhntM0bktXAjp3XDPimVOU3zWTL2-"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
              <div>
                <h4 className="text-base font-bold text-neutral-900 truncate">苏维埃政府旧址</h4>
                <p className="text-xs text-neutral-500 mt-1 truncate">福建省宁德市霞浦县</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-[#d41111]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs font-semibold text-[#d41111]">2.5 公里</span>
                <span className="text-neutral-300 text-xs">•</span>
                <span className="text-xs text-neutral-500">历史遗址</span>
              </div>
            </div>
            <button className="shrink-0 size-9 flex items-center justify-center rounded-full bg-[#d41111]/10 hover:bg-[#d41111]/20 text-[#d41111] transition-colors self-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* 站点2 - 红军纪念碑 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform cursor-pointer">
            <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-200">
              <img
                alt="红军纪念碑"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAC3o7YaXaJ4X5iIWJd0PskHYwrFwbPY8wSR5an2rHB6cyph-hcOemSZWrZ7pYs9bFetBvvRpbq4ct-rZY94rQD4G9sKy3XG0byTXm1Y4MZkyZ6byejKHHOK-ci0J37BYmwycS5u_1Y0K_0W_qH6m6v4XbxF4uyug2u9lwDbGKZcUjBe57zu_zl2oFXGXu9g8i8l4j1gXB3GCZZjdgp9MJ0oclXHcvIXgML7MkbvnO18AFntuGwnxhBZRyAF28-2gmK-SIuLyj4027G"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
              <div>
                <h4 className="text-base font-bold text-neutral-900 truncate">红军纪念碑</h4>
                <p className="text-xs text-neutral-500 mt-1 truncate">福建省南平市武夷山市</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs font-medium text-neutral-500">12.8 公里</span>
                <span className="text-neutral-300 text-xs">•</span>
                <span className="text-xs text-neutral-500">纪念碑</span>
              </div>
            </div>
            <button className="shrink-0 size-9 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors self-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* 站点3 - 古田会议会址 */}
          <div className="flex items-start gap-3 p-3 rounded-xl bg-white shadow-sm border border-neutral-100 active:scale-[0.98] transition-transform cursor-pointer">
            <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-neutral-200">
              <img
                alt="古田会议会址"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBe8kv7NJfv-TaDVj9BQo0qkUJET2X9QjJgaQ-rxQ91zQ0d_TB1wzPbJzLFOSjOLx-5nIKKC498q2uBIx1yhBqzhSqm5Jt9q6gGvivrUAZ1XjPtXzdYXqQW6pre6aOgyLDX60pS5Ql1b0SRJjt7HxLvN42t_nndKA_ETKNSN-rwM_6XVrLbwA5614QtGjEwBbkJUgtSeZwUMlNEwOitgQRho7TJf8vy9gXGtKicQOd7pwZUqTHmM0hIYqBGrf7jATe39ckkDa3RaWsz"
              />
            </div>
            <div className="flex-1 min-w-0 flex flex-col justify-between h-20 py-0.5">
              <div>
                <h4 className="text-base font-bold text-neutral-900 truncate">古田会议会址</h4>
                <p className="text-xs text-neutral-500 mt-1 truncate">福建省龙岩市上杭县</p>
              </div>
              <div className="flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-xs font-medium text-neutral-500">45.0 公里</span>
                <span className="text-neutral-300 text-xs">•</span>
                <span className="text-xs text-neutral-500">教育基地</span>
              </div>
            </div>
            <button className="shrink-0 size-9 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 transition-colors self-center">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* 底部导航栏 */}
      <BottomNav activePage="地图" onNavigate={onNavigate} />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes bounce-slight {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        .animate-bounce-slight {
          animation: bounce-slight 2s infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}