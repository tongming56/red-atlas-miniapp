import { ArrowLeft } from 'lucide-react';
import BottomNav from './BottomNav';

export default function KnowledgeGraphPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="bg-[#f9fafb] h-screen w-full flex flex-col text-gray-900 overflow-hidden">
      {/* 顶部导航栏 */}
      <header className="flex-none flex items-center justify-between px-4 pt-12 pb-3 bg-[#f9fafb]/80 backdrop-blur-xl sticky top-0 z-50 border-b border-gray-200/50">
        <button
          onClick={() => onNavigate('详情')}
          aria-label="返回"
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full active:bg-gray-200 transition-colors"
        >
          <ArrowLeft className="w-6 h-6 text-gray-800" />
        </button>
        <h1 className="text-[17px] font-semibold text-gray-900 absolute left-1/2 -translate-x-1/2">
          知识图谱
        </h1>
        <div className="w-10"></div>
      </header>

      {/* 筛选标签 */}
      <div className="flex-none w-full px-4 py-3 z-40 bg-[#f9fafb]">
        <div className="flex gap-2.5 overflow-x-auto no-scrollbar">
          <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-[#d41111] text-white shadow-md shadow-[#d41111]/20 transition-all active:scale-95">
            <span className="text-xs font-medium">全部</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-white border border-gray-200 text-gray-600 active:bg-gray-50 transition-all active:scale-95">
            <span className="text-xs font-medium">人物</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-white border border-gray-200 text-gray-600 active:bg-gray-50 transition-all active:scale-95">
            <span className="text-xs font-medium">地点</span>
          </button>
          <button className="flex h-8 shrink-0 items-center justify-center px-4 rounded-full bg-white border border-gray-200 text-gray-600 active:bg-gray-50 transition-all active:scale-95">
            <span className="text-xs font-medium">事件</span>
          </button>
        </div>
      </div>

      {/* 主内容区 - 知识图谱 */}
      <main className="flex-1 relative w-full overflow-hidden bg-[#f9fafb]">
        {/* 网格背景 */}
        <div
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* 图谱容器 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-[360px] h-[360px] translate-y-[-10%]">
            {/* SVG 连接线 */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible">
              {/* 中心到福安 */}
              <line className="stroke-gray-300" strokeWidth="1" x1="180" y1="180" x2="60" y2="80" />
              {/* 中心到叶飞 */}
              <line className="stroke-gray-300" strokeWidth="1" x1="180" y1="180" x2="300" y2="100" />
              {/* 中心到独立师成立 */}
              <line className="stroke-gray-300" strokeWidth="1" x1="180" y1="180" x2="80" y2="280" />
              {/* 中心到柏柱洋（红色） */}
              <line className="stroke-red-300" strokeWidth="1.5" x1="180" y1="180" x2="280" y2="260" />
              {/* 中心到更多（虚线） */}
              <line className="stroke-gray-300" strokeWidth="1" strokeDasharray="4" x1="180" y1="180" x2="320" y2="180" />
            </svg>

            {/* 中心节点 - 闽东苏区 */}
            <div className="absolute top-1/2 left-1/2 w-20 h-20 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-[#d41111] flex items-center justify-center node-pulse relative z-10 border-4 border-[#f9fafb]" style={{ boxShadow: '0 0 20px rgba(212, 17, 17, 0.4)' }}>
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z" />
                </svg>
              </div>
              <span className="mt-2 text-xs font-bold text-gray-900 bg-white/90 px-2 py-0.5 rounded shadow-sm backdrop-blur-sm whitespace-nowrap z-20">
                闽东苏区
              </span>
            </div>

            {/* 节点1 - 福安 */}
            <div className="absolute top-[80px] left-[60px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] group-active:scale-95 transition-transform">
                <svg className="w-4.5 h-4.5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
              </div>
              <span className="mt-1 text-[10px] font-medium text-gray-500">福安</span>
            </div>

            {/* 节点2 - 叶飞 */}
            <div className="absolute top-[100px] left-[300px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] overflow-hidden group-active:scale-95 transition-transform">
                <div className="w-full h-full bg-red-50 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[#d41111]/80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
              </div>
              <span className="mt-1 text-[10px] font-medium text-gray-500">叶飞</span>
            </div>

            {/* 节点3 - 独立师成立 */}
            <div className="absolute top-[280px] left-[80px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center group cursor-pointer">
              <div className="w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-[0_2px_12px_-2px_rgba(0,0,0,0.08)] group-active:scale-95 transition-transform">
                <svg className="w-4.5 h-4.5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <span className="mt-1 text-[10px] font-medium text-gray-500">独立师成立</span>
            </div>

            {/* 节点4 - 柏柱洋（高亮） */}
            <div className="absolute top-[260px] left-[280px] -translate-x-1/2 -translate-y-1/2 z-30 flex flex-col items-center cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-[#d41111] text-white border-4 border-white flex items-center justify-center shadow-lg shadow-[#d41111]/30 transform scale-110">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l-5.5 9h11z M7 12v9l5-3 5 3v-9z" />
                </svg>
              </div>
              <span className="mt-1.5 text-[11px] font-bold text-[#d41111]">柏柱洋</span>
            </div>

            {/* 节点5 - 更多 */}
            <div className="absolute top-[180px] left-[320px] -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center opacity-60">
              <div className="w-6 h-6 rounded-full bg-transparent border border-gray-300 flex items-center justify-center">
                <svg className="w-3 h-3 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* 底部提示文字 */}
        <div className="absolute bottom-6 left-0 w-full text-center pointer-events-none">
          <p className="text-[11px] text-gray-400 font-medium tracking-wide uppercase">
            点击节点查看详情 · CLICK NODES TO VIEW
          </p>
        </div>
      </main>

      {/* 底部抽屉卡片 */}
      <div className="flex-none relative z-50 w-full bg-white rounded-t-3xl shadow-[0_-4px_25px_rgba(0,0,0,0.05)] border-t border-gray-100 transform transition-transform duration-300">
        {/* 拖拽指示器 */}
        <div className="w-full flex justify-center pt-3 pb-2">
          <div className="w-10 h-1 rounded-full bg-gray-300"></div>
        </div>

        {/* 卡片内容 */}
        <div className="px-5 pb-8 pt-1">
          <div className="flex gap-4 items-start">
            {/* 卡片图片 */}
            <div className="w-20 h-20 shrink-0 rounded-lg overflow-hidden bg-gray-100 shadow-sm border border-gray-100 relative group">
              <div
                className="w-full h-full bg-cover bg-center transition-transform group-hover:scale-105"
                style={{
                  backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA3JSm9skT5p2yJ4n0d0rL7YewjLkflTCdeiql1sJ9sMASghsEF0fuLWXw80nohxzwZVzKhtxDUf1TuICo8Sbil-QUYsgJm4lcsJgI1sh5pgBQVmMvq22qJKxx_L6X90pM5wO4QG3jSjWpxDS_GpzUoGzdvyF_IGvsP9evVfMSH79EtBmXYVjRUNRwVZeo5pfRG9zRloOAyvgScQaACD8NaeFIt1t_ele_PzRGqmWlE8Pxk7ENNKvtePAQCCfbYl8vb5MwVv6f5dRRk')"
                }}
              ></div>
            </div>

            {/* 卡片文字信息 */}
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <h3 className="text-base font-bold text-gray-900 leading-tight truncate pr-2">
                  柏柱洋苏维埃政府旧址
                </h3>
                <button className="text-gray-400 hover:text-[#d41111] transition-colors p-1 -mr-2 -mt-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </button>
              </div>
              <p className="text-[#d41111] text-[11px] font-medium mt-0.5">
                Mindong Soviet Government Site
              </p>
              <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                1934年，闽东苏维埃政府在此成立。作为闽东革命的中心，这里见证了许多重要历史时刻。
              </p>
            </div>
          </div>

          {/* 操作按钮 */}
          <div className="flex gap-3 mt-6">
            <button
              onClick={() => onNavigate('详情')}
              className="flex-1 h-10 bg-[#d41111] hover:bg-[#b90e0e] text-white rounded-full font-medium text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#d41111]/25 transition-all active:scale-[0.98]"
            >
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              查看详情
            </button>
            <button className="h-10 w-10 shrink-0 bg-red-50 text-[#d41111] border border-red-100 rounded-full flex items-center justify-center transition-colors active:bg-red-100">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <button className="h-10 w-10 shrink-0 bg-white border border-gray-200 text-gray-600 rounded-full flex items-center justify-center transition-colors active:bg-gray-50">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        @keyframes pulse-ring {
          0% {
            transform: translate(-50%, -50%) scale(0.95);
            box-shadow: 0 0 0 0 rgba(212, 17, 17, 0.4);
          }
          70% {
            transform: translate(-50%, -50%) scale(1);
            box-shadow: 0 0 0 12px rgba(212, 17, 17, 0);
          }
          100% {
            transform: translate(-50%, -50%) scale(0.95);
            box-shadow: 0 0 0 0 rgba(212, 17, 17, 0);
          }
        }
        .node-pulse::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          animation: pulse-ring 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
          z-index: -1;
        }
      `}</style>
    </div>
  );
}