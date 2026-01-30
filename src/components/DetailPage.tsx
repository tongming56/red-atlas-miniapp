import { ArrowLeft, MapPin, Navigation, Heart, Share2, Phone, Clock, Info, Users, Receipt } from 'lucide-react';
import BottomNav from './BottomNav';

export default function DetailPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full h-full max-w-[430px] bg-[#f8f6f6] shadow-2xl overflow-hidden flex flex-col">
      {/* 顶部大图区域 */}
      <div className="relative w-full h-[340px] shrink-0">
        <div 
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ 
            backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAk4Gg8kE0Ip4gQwP80dw9c9pzYnvBhmXl3QjqKeFG1sBFdfOZOk8LwiEA0nWmKO3KQRBSsez2e2CnrX6eq_idc1Pc2YbLnN-qs6wP0eOjaCfjSl-iKKd6Iq5t_mvlCho18IHO9S68mg8qBAd9RCe3dg13ASqcsCs31W_FWPr72EAM7F0G3ZI4VrbmD1Zlfw48rslTtNtd0xu1ej9Pj92D1D8dv2shXYxW1hTa676WvvXT6F34hSNKTt-Qx-6Mk3qYLFMxVuwasDd_l")'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>
        </div>

        {/* 顶部导航栏 */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-4 pt-12 pb-4 z-20">
          <button 
            onClick={() => onNavigate('首页')}
            className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition-colors active:scale-95"
          >
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="flex gap-3">
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition-colors active:scale-95">
              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
              </svg>
            </button>
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-black/20 backdrop-blur-md text-white hover:bg-black/30 transition-colors active:scale-95">
              <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z" />
              </svg>
            </button>
          </div>
        </div>

        {/* 底部标题信息 */}
        <div className="absolute bottom-0 w-full px-5 pb-10 flex flex-col items-start z-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-[#d41111] text-white text-[10px] font-bold tracking-wider uppercase border border-red-800/30">
              红色地标
            </span>
            <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-sm bg-black/40 backdrop-blur-sm text-white/90 text-[10px] font-medium tracking-wide border border-white/10">
              ID: MD-2023-084
            </span>
          </div>
          <h1 className="text-2xl font-bold text-white mb-1" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
            闽东苏维埃政府旧址
          </h1>
          <div className="flex items-center text-white/80 text-xs">
            <svg className="w-3.5 h-3.5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
            <span>12,403 次浏览</span>
          </div>
        </div>
      </div>

      {/* 主内容区域（圆角卡片） */}
      <div className="flex-1 -mt-6 bg-[#f8f6f6] rounded-t-[1.5rem] relative z-10 overflow-y-auto no-scrollbar pb-24">
        <div className="px-5 pt-6">
          {/* 地址信息卡片 */}
          <div className="bg-white rounded-xl p-4 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05),0_1px_4px_-1px_rgba(0,0,0,0.02)] mb-6 border border-gray-100">
            <div className="flex flex-col gap-4">
              {/* 详细地址 */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-red-50 text-[#d41111] flex items-center justify-center shrink-0">
                  <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0 pt-0.5">
                  <span className="block text-[#999999] text-xs mb-0.5">详细地址</span>
                  <span className="block text-[#1f1f1f] text-sm font-medium truncate">福建省宁德市福安市柏柱洋</span>
                </div>
                <button className="shrink-0 text-[#d41111] p-1">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* 分隔线 */}
              <div className="h-px w-full bg-gray-100"></div>

              {/* 所属区域和城市 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#d41111] flex items-center justify-center shrink-0">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <span className="block text-[#999999] text-xs mb-0.5">所属区域</span>
                    <span className="block text-[#1f1f1f] text-sm font-medium">福建省</span>
                  </div>
                </div>
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-red-50 text-[#d41111] flex items-center justify-center shrink-0">
                    <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div className="pt-0.5">
                    <span className="block text-[#999999] text-xs mb-0.5">城市</span>
                    <span className="block text-[#1f1f1f] text-sm font-medium">宁德市</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 简介部分 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-[#d41111] rounded-full"></div>
              <h2 className="text-lg font-semibold text-[#1f1f1f]">简介</h2>
            </div>
            <div className="relative">
              <p className="text-[#666666] text-sm leading-6 text-justify">
                位于群山环抱之中，该遗址在20世纪30年代曾是革命力量的指挥中心。这里保存了当年苏维埃政府办公的旧貌，见证了那段烽火连天的峥嵘岁月。建筑风格独特，具有典型的闽东民居特色，同时也承载着厚重的红色历史记忆。
              </p>
              <div className="mt-2 flex justify-start">
                <button className="text-[#d41111] text-xs font-semibold flex items-center gap-1 active:opacity-70">
                  展开阅读
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* 功能服务 */}
          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-[#d41111] rounded-full"></div>
              <h2 className="text-lg font-semibold text-[#1f1f1f]">功能服务</h2>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {/* 3D 全景 */}
              <button 
                onClick={() => onNavigate('三维模型')}
                className="group relative flex flex-col p-4 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all duration-200"
              >
                <div className="absolute top-3 right-3 text-gray-300 group-hover:text-[#d41111] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[#1f1f1f] text-sm font-semibold mb-0.5">3D 全景</span>
                  <span className="block text-[#999999] text-xs">沉浸式虚拟体验</span>
                </div>
              </button>

              {/* 知识图谱 */}
              <button 
                onClick={() => onNavigate('知识图谱')}
                className="group relative flex flex-col p-4 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all duration-200"
              >
                <div className="absolute top-3 right-3 text-gray-300 group-hover:text-[#d41111] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center mb-3">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[#1f1f1f] text-sm font-semibold mb-0.5">知识图谱</span>
                  <span className="block text-[#999999] text-xs">历史关联网络</span>
                </div>
              </button>

              {/* 地图导航 */}
              <button className="group relative flex flex-col p-4 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all duration-200">
                <div className="absolute top-3 right-3 text-gray-300 group-hover:text-[#d41111] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-3">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[#1f1f1f] text-sm font-semibold mb-0.5">地图导航</span>
                  <span className="block text-[#999999] text-xs">距离当前 2.4km</span>
                </div>
              </button>

              {/* 收藏景点 */}
              <button className="group relative flex flex-col p-4 bg-white rounded-xl border border-gray-100 shadow-sm active:scale-[0.98] transition-all duration-200">
                <div className="absolute top-3 right-3 text-gray-300 group-hover:text-[#d41111] transition-colors">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3">
                  <svg className="w-5.5 h-5.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <span className="block text-[#1f1f1f] text-sm font-semibold mb-0.5">收藏景点</span>
                  <span className="block text-[#999999] text-xs">加入行程规划</span>
                </div>
              </button>
            </div>
          </div>

          {/* 开放时间和门票信息 */}
          <div className="bg-white rounded-xl overflow-hidden border border-gray-100 mb-8">
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#666666]" />
                <span className="text-sm text-[#666666]">开放时间</span>
              </div>
              <span className="text-sm font-medium text-[#1f1f1f]">09:00 - 17:00 (周一闭馆)</span>
            </div>
            <div className="flex items-center justify-between p-4">
              <div className="flex items-center gap-3">
                <Receipt className="w-5 h-5 text-[#666666]" />
                <span className="text-sm text-[#666666]">门票信息</span>
              </div>
              <span className="text-sm font-medium text-green-600">免费参观</span>
            </div>
          </div>
        </div>
      </div>

      {/* 底部固定按钮 */}
      <BottomNav activePage="详情" onNavigate={onNavigate} />

      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}