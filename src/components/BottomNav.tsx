interface BottomNavProps {
  activePage: string;
  onNavigate: (page: string) => void;
}

export default function BottomNav({ activePage, onNavigate }: BottomNavProps) {
  return (
    <nav 
      className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-100 z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.03)]" 
      style={{ paddingBottom: 'env(safe-area-inset-bottom)' }}
    >
      <div className="flex justify-around items-center h-14 px-6">
        <button
          onClick={() => onNavigate('首页')}
          className={`flex flex-col items-center justify-center w-16 space-y-0.5 transition-colors ${
            activePage === '首页' ? 'text-[#B71C1C]' : 'text-gray-400 hover:text-[#B71C1C]'
          }`}
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill={activePage === '首页' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
          <span className="text-[10px] font-medium">首页</span>
        </button>

        <button
          onClick={() => onNavigate('扫码')}
          className="flex flex-col items-center justify-center relative -top-3"
        >
          <div className="bg-[#B71C1C] rounded-full p-3 shadow-lg shadow-red-500/40 transform transition-transform active:scale-95">
            <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
            </svg>
          </div>
          <span className="text-[10px] font-medium text-[#B71C1C] mt-0.5">扫码</span>
        </button>

        <button
          onClick={() => onNavigate('收藏')}
          className={`flex flex-col items-center justify-center w-16 space-y-0.5 transition-colors ${
            activePage === '收藏' ? 'text-[#B71C1C]' : 'text-gray-400 hover:text-[#B71C1C]'
          }`}
        >
          <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill={activePage === '收藏' ? 'currentColor' : 'none'} viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <span className="text-[10px] font-medium">收藏</span>
        </button>
      </div>
    </nav>
  );
}
