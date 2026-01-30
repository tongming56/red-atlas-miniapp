import { useState } from 'react';
import { Heart, MapPin, ChevronLeft } from 'lucide-react';
import BottomNav from './BottomNav';

export default function FavoritesPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [activeFilter, setActiveFilter] = useState('全部');

  const favorites = [
    {
      id: 1,
      name: '古田会议会址',
      location: '龙岩市 · 上杭县',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B',
      time: '2天前'
    },
    {
      id: 2,
      name: '长汀革命旧址',
      location: '龙岩市 · 长汀县',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH',
      time: '1周前'
    },
    {
      id: 3,
      name: '建宁中央苏区反围剿纪念园',
      location: '三明市 · 建宁县',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI',
      time: '2周前'
    },
    {
      id: 4,
      name: '闽东革命烈士纪念碑',
      location: '宁德市中心',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtxYh2vNC8LbsM0-76G18qmzOL_ocIyrSGUPA33PuAI8aj01N7viplqxcv6WTd6mxgcU_KRWoGVKnWDVMCrZuAjJmZ0i2jLVes7bAkUxKEImkxF1w1LA05DHk68fv4C3JHalU_qF5-puWDtnSxqQv5Nu32SbSsSZ4glirmHRGODU3PJuG21CM29cUgHlCsDFJjne1KTVzHLymGzf5EsLU-Ip_aecdKSkHV4IlHr6fByaBdIKUe66kiIHQTfRFLvGQvc6FyHrR0mBrc',
      time: '1月前'
    }
  ];

  return (
    <div className="relative flex h-full max-h-[900px] w-full max-w-[400px] flex-col bg-[#F7F7F7] overflow-hidden mx-auto">
      {/* 红色顶部栏 */}
      <header className="bg-[#B71C1C] pt-12 pb-3 px-4 shadow-sm z-30 shrink-0">
        <div className="flex items-center justify-between relative">
          <button 
            onClick={() => onNavigate('首页')}
            className="text-white flex size-8 items-center justify-center rounded-full active:bg-white/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <h1 className="text-white text-[17px] font-bold absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 tracking-wide">
            我的关注
          </h1>
          <button 
            onClick={() => onNavigate('关于')}
            className="text-white/90 text-[14px] font-medium px-3 py-1 rounded-full active:bg-white/20 transition-colors"
          >
            关于
          </button>
        </div>
      </header>

      {/* 筛选栏 */}
      <div className="shrink-0 bg-[#F7F7F7] z-20 sticky top-0 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex gap-2">
            <button 
              onClick={() => setActiveFilter('全部')}
              className={`px-3 py-1 rounded-full text-xs font-medium shadow-sm border ${
                activeFilter === '全部' 
                  ? 'bg-white border-gray-100 text-[#B71C1C]' 
                  : 'bg-transparent border-transparent text-gray-500'
              }`}
            >
              全部
            </button>
            <button 
              onClick={() => setActiveFilter('最近添加')}
              className={`px-3 py-1 rounded-full text-xs font-medium ${
                activeFilter === '最近添加' 
                  ? 'bg-white border-gray-100 text-[#B71C1C] shadow-sm border' 
                  : 'bg-transparent text-gray-500'
              }`}
            >
              最近添加
            </button>
          </div>
          <button className="text-xs text-gray-500 font-medium px-2 py-1">
            管理
          </button>
        </div>
      </div>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 pb-24 space-y-3">
        {favorites.map((item) => (
          <div 
            key={item.id}
            onClick={() => onNavigate('详情')}
            className="group relative flex items-start gap-3 bg-white p-3 rounded-xl shadow-sm active:scale-[0.99] transition-transform duration-100 cursor-pointer"
          >
            {/* 图片 */}
            <div className="relative shrink-0 w-[88px] h-[88px] rounded-lg overflow-hidden bg-gray-100">
              <img 
                src={item.image} 
                alt={item.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* 内容 */}
            <div className="flex-1 min-w-0 flex flex-col h-[88px] justify-between py-0.5">
              <div className="pr-8">
                <h3 className="text-[16px] font-bold text-gray-900 leading-tight mb-1 truncate">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1 text-gray-500">
                  <MapPin className="w-[14px] h-[14px]" />
                  <span className="text-xs truncate">{item.location}</span>
                </div>
              </div>
              <div>
                <span className="text-[10px] font-medium text-gray-400 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
                  {item.time}
                </span>
              </div>
            </div>

            {/* 收藏按钮 */}
            <button className="absolute top-3 right-3 flex items-center justify-center size-8 rounded-full text-[#B71C1C] active:bg-red-50 transition-colors">
              <Heart className="w-[22px] h-[22px] fill-[#B71C1C]" />
            </button>
          </div>
        ))}
      </main>

      {/* 底部导航栏 */}
      <BottomNav activePage="收藏" onNavigate={onNavigate} />
    </div>
  );
}