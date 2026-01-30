import { X, Search, TrendingUp } from 'lucide-react';
import BottomNav from './BottomNav';

export default function SearchPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const hotSearches = ['古田会议', '红军桥', '苏维埃政府旧址', '烈士陵园', '闽东特委'];

  const searchResults = [
    {
      id: 1,
      name: '闽东苏维埃政府旧址',
      city: '福安市 · 柏柱洋',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBvffJG9Q6SwWXRsJLZ78x2NNpvy-jKXKvUjVCH-rrxl_f33O33slD-QHdyzZbglaqF3yJKAK18O_T3_VhuAPOq6cwN07e3IjXQC9zhCS15A8P5eYMQnldADOMioOxeoGNwmHqJpGzgnU4veaM77GQt0ppLwkuMslAEs6iez2Ee9Wob3haE7MLYh7XJ-2cDARL4pjylMDgSP9nysbTaNRv9ru4nH31aPc9DgsPN_T6Xn6HXdqW24-lOZAI1W518acfMfXRbrJ18C36K',
      tags: ['革命根据地', '省保'],
      badgeColor: 'bg-[#d41111]'
    },
    {
      id: 2,
      name: '红军桥',
      city: '宁德市 · 寿宁县',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBizI7lUlHctizaDeuFppepFA0Nx8Fg2cABgWhDfuUlXuwduhdthhyvN5rPaQIS6COAbIxblj6Mu2IrevluioR5l-qsRhP53I61UTnKHnJaB6OFn78RzavWdvn6-RInYZyZzac0ByucPFNyw5hv8V2YVPEvv9-ECx8OBtMOvo7JhzxFgjroCcFcq9JWPNGLwfZ-478mGJOcinNx1sUR-EjK_0ORn7mKQ6xsChf1CZcAZ_fxioUhLNIaIleF_0RvhXqgh68U6xjDuelS',
      tags: ['交通要塞', '历史建筑'],
      badgeColor: 'bg-gray-600'
    },
    {
      id: 3,
      name: '中共闽东特委旧址',
      city: '福鼎市',
      image: null,
      tags: ['会议旧址', '爱国教育'],
      badgeColor: 'bg-gray-600'
    }
  ];

  return (
    <div className="bg-[#f8f9fa] text-gray-900 font-sans min-h-screen flex flex-col">
      {/* 顶部搜索栏 */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-100">
        <div className="flex items-center px-4 py-3 gap-3">
          <div className="flex-1 relative group">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <input
              className="block w-full pl-9 pr-8 h-9 bg-gray-100 border-none rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:ring-0 focus:bg-gray-50 transition-colors focus:outline-none"
              placeholder="输入遗址名称..."
              type="text"
            />
            <button className="absolute inset-y-0 right-0 pr-2 flex items-center hidden">
              <svg className="w-4 h-4 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button 
            onClick={() => onNavigate('首页')}
            className="text-[15px] font-medium text-gray-600 hover:opacity-70 transition-opacity"
          >
            取消
          </button>
        </div>

        {/* 筛选栏 */}
        <div className="flex items-center px-2 pb-2">
          <div className="flex flex-1 justify-between px-4">
            <button className="flex items-center gap-0.5 py-2 text-[13px] font-medium text-gray-700">
              <span>地区</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center gap-0.5 py-2 text-[13px] font-medium text-gray-700">
              <span>城市</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            <button className="flex items-center gap-0.5 py-2 text-[13px] font-medium text-gray-700">
              <span>标签</span>
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto">
        {/* 热门搜索 */}
        <section className="px-4 py-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-sm font-bold text-gray-900">热门搜索</h3>
            <button className="text-gray-400 hover:text-[#d41111] transition-colors">
              <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
            </button>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {hotSearches.map((keyword, index) => (
              <button
                key={index}
                className="px-3 py-1.5 bg-red-50 text-[#d41111] text-xs font-medium rounded-full border border-red-100 hover:bg-red-100 transition-colors"
              >
                {keyword}
              </button>
            ))}
          </div>
        </section>

        {/* 分隔线 */}
        <div className="h-2 bg-gray-100 w-full"></div>

        {/* 搜索结果 */}
        <section className="px-4 py-4 space-y-3">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-2">
            搜索结果 (3)
          </h3>

          {searchResults.map((item) => (
            <div
              key={item.id}
              className="group flex bg-white rounded-xl p-2.5 shadow-sm border border-gray-100 gap-3 active:scale-[0.99] transition-transform cursor-pointer"
            >
              {/* 图片区域 */}
              <div className="relative w-24 h-24 shrink-0 rounded-lg overflow-hidden bg-gray-200">
                {item.image ? (
                  <img
                    alt={item.name}
                    className="w-full h-full object-cover"
                    src={item.image}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-100 flex items-center justify-center border border-gray-100">
                    <svg className="w-8 h-8 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                {/* 编号徽章 */}
                <div className={`absolute top-0 left-0 ${item.badgeColor} text-white text-[10px] font-bold px-1.5 py-0.5 rounded-br-md shadow-sm z-10`}>
                  {String(item.id).padStart(2, '0')}
                </div>
              </div>

              {/* 内容区域 */}
              <div className="flex-1 flex flex-col justify-between py-0.5 min-w-0">
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 leading-tight truncate">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 mt-1.5 text-gray-500">
                    <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                    </svg>
                    <span className="text-xs truncate">{item.city}</span>
                  </div>
                </div>

                {/* 标签 */}
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className={`px-1.5 py-0.5 rounded text-[10px] font-medium ${
                        tagIndex === 0
                          ? 'bg-red-50 text-[#d41111] border border-red-100'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* 底部提示 */}
          <div className="flex justify-center py-6 pb-20">
            <span className="text-xs text-gray-400">没有更多结果了</span>
          </div>
        </section>
      </main>

      <BottomNav activePage="搜索" onNavigate={onNavigate} />

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