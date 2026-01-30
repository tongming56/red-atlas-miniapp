import { useState } from 'react';
import ScanPage from './components/ScanPage';
import SearchPage from './components/SearchPage';
import DetailPage from './components/DetailPage';
import Model3DPage from './components/Model3DPage';
import KnowledgeGraphPage from './components/KnowledgeGraphPage';
import MapPage from './components/MapPage';
import FavoritesPage from './components/FavoritesPage';
import AboutPage from './components/AboutPage';
import BottomNav from './components/BottomNav';

// 首页数据
const homeItems = [
  {
    id: 1,
    name: '古田会议会址',
    city: '龙岩市 · 上杭县',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B',
    tags: ['全国重点文物保护单位', '爱国主义教育基地']
  },
  {
    id: 2,
    name: '长汀革命旧址',
    city: '龙岩市 · 长汀县',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH',
    tags: ['红色首府', '历史名城']
  },
  {
    id: 3,
    name: '建宁中央苏区反围剿纪念园',
    city: '三明市 · 建宁县',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI',
    tags: ['反围剿中心', '纪念馆']
  },
  {
    id: 4,
    name: '泰宁红军街',
    city: '三明市 · 泰宁县',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDdxlxqmcMCby48FUpHJ74ojFOAFvM-Z5O1PkySLxGo08YJDHQKWAWtBsfH2HFn4ZaTMuC4A3MzNFYg-WCuiOfV2v4jSurhEW3NUQ7dgiZeJN03cHOtH_wlXjc5qmgAvw13ap8_8OQwK_lNYS_SFfZKS1AWKyWXa0EBRWwaksqgS8Aqiis6mGNK7-bPOMuqKhKH173H2TpL5oaBzS4VwPGnxmTqmoImlejTZdwUMYBFPFgbUdn_1IlcZxoGhS0tt60yvIUUNT834sSY',
    tags: ['古建筑群', '红军标语']
  }
];

const regions = ['全省', '闽东', '闽北', '闽西', '闽南'];

export default function App() {
  const [activeRegion, setActiveRegion] = useState('全省');
  const [activePage, setActivePage] = useState('首页');

  // 如果是关于页面，显示关于组件
  if (activePage === '关于') {
    return <AboutPage onNavigate={setActivePage} />;
  }

  // 如果是收藏页面，显示收藏组件
  if (activePage === '收藏') {
    return <FavoritesPage onNavigate={setActivePage} />;
  }

  // 如果是地图页面，显示地图组件
  if (activePage === '地图') {
    return <MapPage onNavigate={setActivePage} />;
  }

  // 如果是知识图谱页面，显示知识图谱组件
  if (activePage === '知识图谱') {
    return <KnowledgeGraphPage onNavigate={setActivePage} />;
  }

  // 如果是三维模型页面，显示三维模型组件
  if (activePage === '三维模型') {
    return <Model3DPage onNavigate={setActivePage} />;
  }

  // 如果是详情页面，显示详情组件
  if (activePage === '详情') {
    return <DetailPage onNavigate={setActivePage} />;
  }

  // 如果是搜索页面，显示搜索组件
  if (activePage === '搜索') {
    return <SearchPage onNavigate={setActivePage} />;
  }

  // 如果是扫码页面，显示扫码组件
  if (activePage === '扫码') {
    return <ScanPage onNavigate={setActivePage} />;
  }

  return (
    <div className="bg-[#F8F9FA] text-[#111827] font-sans h-screen flex flex-col overflow-hidden">
      {/* 顶部标题栏 */}
      <header className="bg-[#B71C1C] pt-14 pb-4 px-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <h1 className="text-white text-xl font-bold tracking-wide" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
              福建红色图谱
            </h1>
            <span className="text-red-100 text-[10px] font-medium tracking-wider opacity-80 uppercase mt-0.5">
              Revolutionary Heritage Map
            </span>
          </div>
          <div className="w-8"></div>
        </div>

        {/* 搜索栏和扫码按钮 */}
        <div className="flex items-center gap-3 h-11">
          <div 
            onClick={() => setActivePage('搜索')}
            className="flex-1 relative h-full group cursor-pointer"
          >
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-[#B71C1C]/60 transition-colors group-focus-within:text-[#B71C1C]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <div className="flex items-center w-full h-full pl-10 pr-3 rounded-lg bg-white text-sm font-medium text-[#9CA3AF] border-none shadow-sm">
              搜索革命遗址、纪念馆...
            </div>
          </div>
          <button 
            onClick={() => setActivePage('地图')}
            className="h-full aspect-square rounded-lg bg-white/10 border border-white/20 text-white flex items-center justify-center backdrop-blur-sm active:bg-white/20 transition-all"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
            </svg>
          </button>
        </div>
      </header>

      {/* 地区筛选栏 */}
      <div className="bg-white/95 backdrop-blur-sm border-b border-gray-100 py-3 sticky top-[132px] z-40">
        <div className="flex overflow-x-auto no-scrollbar px-4 gap-3" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {regions.map((region) => (
            <button
              key={region}
              onClick={() => setActiveRegion(region)}
              className={`shrink-0 px-5 py-1.5 rounded-full text-sm font-bold transition-all ${
                activeRegion === region
                  ? 'bg-[#B71C1C] text-white shadow-sm ring-1 ring-[#B71C1C]/10 active:scale-95'
                  : 'bg-gray-50 text-[#4B5563] font-medium border border-gray-200 active:bg-gray-100'
              }`}
            >
              {region}
            </button>
          ))}
        </div>
      </div>

      {/* 主内容区 */}
      <main className="flex-1 px-4 py-4 pb-24 space-y-4">
        {homeItems.map((item) => (
          <article
            key={item.id}
            onClick={() => setActivePage('详情')}
            className="group relative flex gap-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05),0_2px_8px_-2px_rgba(0,0,0,0.02)] active:scale-[0.99] transition-all duration-300 cursor-pointer"
          >
            {/* 图片区域 */}
            <div className="w-28 h-28 shrink-0 rounded-lg overflow-hidden bg-gray-100 relative shadow-sm">
              <img
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                src={item.image}
              />
              <div className="absolute top-1 left-1 bg-white/90 backdrop-blur-[2px] w-5 h-5 rounded-full flex items-center justify-center shadow-sm border border-white/50">
                <span className="text-[10px] font-bold text-[#B71C1C]" style={{ fontFamily: "'Noto Sans SC', sans-serif" }}>
                  {item.id}
                </span>
              </div>
            </div>

            {/* 内容区域 */}
            <div className="flex-1 flex flex-col justify-between py-0.5">
              <div>
                <div className="flex items-start gap-2 mb-1.5">
                  <div className="w-1 h-4 rounded-full bg-[#B71C1C] mt-1 shrink-0"></div>
                  <h3 className="text-[17px] font-bold text-[#111827] leading-tight line-clamp-2 tracking-tight">
                    {item.name}
                  </h3>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-[#4B5563] pl-3">
                  <svg className="w-3.5 h-3.5 text-[#B71C1C]/80" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                  <span className="font-medium">{item.city}</span>
                </div>
              </div>

              {/* 标签区域 */}
              <div className="flex flex-wrap gap-2 mt-3 pl-3">
                {item.tags.map((tag, index) => (
                  <span
                    key={index}
                    className={`inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-medium ${
                      index === 0
                        ? 'bg-red-50 text-red-700'
                        : 'bg-gray-50 text-gray-600'
                    }`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </main>

      {/* 底部导航栏 */}
      <BottomNav activePage={activePage} onNavigate={setActivePage} />
    </div>
  );
}