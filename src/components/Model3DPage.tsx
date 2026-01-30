import { ArrowLeft } from 'lucide-react';
import BottomNav from './BottomNav';

export default function Model3DPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[#221010]">
      {/* 顶部导航栏 */}
      <header className="flex items-center justify-between px-4 py-2 bg-[#221010]/95 backdrop-blur text-white border-b border-white/5 shrink-0 z-30 h-[52px]">
        <button 
          onClick={() => onNavigate('详情')}
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-white/10 active:bg-white/20 transition-colors"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-[17px] font-bold tracking-tight absolute left-1/2 transform -translate-x-1/2">
          三维模型
        </h1>
        <div className="w-8"></div>
      </header>

      {/* 主内容区 */}
      <main className="relative flex-1 w-full overflow-hidden bg-[#1a0f0f]" style={{ perspective: '1000px' }}>
        {/* 网格背景 */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50"
          style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)'
          }}
        ></div>

        {/* 渐变遮罩 */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#221010]/80 via-transparent to-[#221010]/80 pointer-events-none"></div>

        {/* 3D模型展示区 */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ transformStyle: 'preserve-3d' }}>
          <div className="relative w-80 h-80">
            {/* 底部阴影/光晕 */}
            <div className="absolute inset-0 bg-[#d41111]/20 blur-3xl rounded-full transform scale-y-50 translate-y-20"></div>
            
            {/* 3D模型图片 */}
            <img
              alt="3D wireframe render"
              className="w-full h-full object-contain drop-shadow-2xl relative z-10 opacity-90"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCGP7CXSNSaMrQC5Nlr_F35SaDlLBOW-gxO0FJQUXatw4cE7Qilz-hfcypJfwIaVtrQBhkXs69Q6zpfrYmQnC7xi0rffGM_FjcMKeFQ-u3EILdC3zG37DqpscVL9jfT86O9PnUS7cgi__Y6Y21JHgCbYcrv9hzNdkSUhS6__nc8VMuzJk0VcorhjjjEjRpCjLRZ0rjA4j_9WQw4P3z2QP4kxxMSPqOvnvh0v2kDAgKyeKUJraQWNL8rNH77cwIpA2qRM1AWZdAfZpga"
            />

            {/* 坐标轴指示器 */}
            <div className="absolute -bottom-16 right-0 flex flex-col items-center gap-1 opacity-40 scale-75">
              {/* Y轴 (绿色) */}
              <div className="h-10 w-0.5 bg-green-500 rounded-full"></div>
              {/* X轴 (红色) */}
              <div className="w-10 h-0.5 bg-red-500 absolute bottom-0 right-0 rounded-full"></div>
              {/* Z轴 (蓝色) */}
              <div className="w-6 h-0.5 bg-blue-500 absolute bottom-0 right-0 rotate-45 origin-bottom-right rounded-full"></div>
            </div>
          </div>
        </div>

        {/* 右侧悬浮按钮 */}
        <div className="absolute right-4 top-4 flex flex-col gap-3 z-20">
          <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg hover:bg-[#d41111]/80 transition-all active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5zM4 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-3zM14 16a1 1 0 011-1h4a1 1 0 011 1v3a1 1 0 01-1 1h-4a1 1 0 01-1-1v-3z" />
            </svg>
          </button>
          <button className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md flex items-center justify-center text-white border border-white/10 shadow-lg hover:bg-[#d41111]/80 transition-all active:scale-95">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </main>

      {/* 底部导航栏 */}
      <BottomNav activePage="三维模型" onNavigate={onNavigate} />
    </div>
  );
}