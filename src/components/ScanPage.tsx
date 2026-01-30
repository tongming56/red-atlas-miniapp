import { useState } from 'react';
import BottomNav from './BottomNav';

export default function ScanPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  const recentHistory = [
    {
      id: 1,
      name: '宁德革命烈士纪念馆',
      nameEn: 'Ningde Revolutionary Hall',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDa4nha9LnJ6kBqz14S9xizMKHI2_93JYyrtUhaBAKxFosvZkonpLgWpYoSa4bYZRNnUbJqwEs0i5C8aDKta_zWh9kxkP5rTJU7UuT_c_sFwwJp7IrG2I_xKRfp4naRQkTIkULOCWdspqomxLRlbbVtlM5_A08ufJZRw03PSRPcTXAJ9ZQ4Q_i_8Inl9skvxBWwswfl-iJMO3EbTSgJ09z9RWBwfgkfuCsHhOupOPWEtGSafktO4lDsaTD8YPvsAUCnIDGfMYbPhSlC',
      time: 'Today'
    },
    {
      id: 2,
      name: '福安红军纪念园',
      nameEn: "Fu'an Red Army Memorial",
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCXy_5dLbXkbTP091RSKMI9ayZ2-RRWiE__W_ih7CPZaaKlFwwib6eKUkr2WO_2bLega6k5Qw4MYRw_apKuwsdvicg8eLn2Sw6y1pkSH2iICfF4pE_Ldufeoj2mza3kYsZkroeGFFqHquycGjcUzv_xajayo_aO4exmZO8aCt7IJZkCGtLm_JQp8Im1ryopg-PhkVjZbAfr5DAiDUOSJT0ydZSa34OQcvqJ5Ryk8NH01aJ1Y67i70owmMLuPoQCX_R2FAEG4uTHM5UK',
      time: 'Yesterday'
    }
  ];

  return (
    <div className="relative flex h-full min-h-screen w-full flex-col max-w-md mx-auto bg-[#f8f6f6] shadow-2xl overflow-hidden">
      {/* 顶部标题栏 */}
      <header className="sticky top-0 z-50 flex items-center h-[52px] px-4 bg-[#f8f6f6]/95 backdrop-blur-md border-b border-gray-200/50">
        <button 
          onClick={() => onNavigate('首页')}
          className="flex items-center justify-center w-10 h-10 -ml-2 rounded-full hover:bg-gray-100 active:scale-95 transition-all text-[#1b0d0d]"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center pointer-events-none">
          <h1 className="text-base font-bold text-[#1b0d0d] tracking-tight">识别遗址</h1>
        </div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 flex flex-col items-center w-full px-5 pt-6 pb-24 overflow-y-auto overflow-x-hidden no-scrollbar">
        {/* 顶部说明文字 */}
        <div className="text-center mb-8 w-full max-w-[280px]">
          <h2 className="text-xl font-bold text-[#1b0d0d] mb-1">请对准遗址二维码</h2>
          <p className="text-xs font-medium text-[#666666] leading-relaxed">
            Align QR code within the frame to identify site automatically
          </p>
        </div>

        {/* 扫码框 */}
        <div className="relative w-full aspect-square max-w-[280px] mb-8 group">
          {/* 背景暗色区域 */}
          <div className="absolute inset-0 bg-gray-900 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-black/5">
            <div className="w-full h-full bg-gradient-to-br from-gray-800 via-gray-900 to-black opacity-90"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-white/10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z" />
              </svg>
            </div>
          </div>

          {/* 四个角的边框 */}
          <div className="absolute inset-0 -m-1 pointer-events-none">
            <div className="relative w-full h-full">
              {/* 左上角 */}
              <div className="absolute top-0 left-0 w-9 h-9 border-[#d41111] border-4 rounded-tl-xl border-r-0 border-b-0"></div>
              {/* 右上角 */}
              <div className="absolute top-0 right-0 w-9 h-9 border-[#d41111] border-4 rounded-tr-xl border-l-0 border-b-0"></div>
              {/* 左下角 */}
              <div className="absolute bottom-0 left-0 w-9 h-9 border-[#d41111] border-4 rounded-bl-xl border-r-0 border-t-0"></div>
              {/* 右下角 */}
              <div className="absolute bottom-0 right-0 w-9 h-9 border-[#d41111] border-4 rounded-br-xl border-l-0 border-t-0"></div>
              {/* 扫描线 */}
              <div className="absolute top-1/2 left-4 right-4 h-0.5 opacity-80 animate-pulse" 
                   style={{ 
                     background: 'linear-gradient(to bottom, rgba(212, 17, 17, 0) 0%, rgba(212, 17, 17, 0.8) 50%, rgba(212, 17, 17, 0) 100%)',
                     boxShadow: '0 0 8px rgba(212, 17, 17, 0.4)'
                   }}>
              </div>
            </div>
          </div>
        </div>

        {/* 三个功能按钮 */}
        <div className="flex items-center justify-center gap-10 mb-10 w-full">
          {/* 相册按钮 */}
          <button className="group flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-[#666666] group-hover:bg-gray-100 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#666666]">Album</span>
          </button>

          {/* 拍照按钮（中间大按钮） */}
          <button className="relative group cursor-pointer -mt-2">
            <div className="absolute inset-0 bg-[#d41111] rounded-full blur-lg opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
            <div className="relative flex shrink-0 items-center justify-center rounded-full w-20 h-20 bg-[#d41111] hover:bg-[#a30d0d] text-white shadow-[0_4px_20px_-2px_rgba(212,17,17,0.1)] transition-transform active:scale-95">
              <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
          </button>

          {/* 闪光灯按钮 */}
          <button className="group flex flex-col items-center gap-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 text-[#666666] group-hover:bg-gray-100 transition-all shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)]">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <span className="text-[10px] font-medium text-[#666666]">Light</span>
          </button>
        </div>

        {/* 手动输入编号 */}
        <div className="w-full mb-8">
          <label className="block w-full group relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
              </svg>
            </div>
            <input
              className="block w-full h-[56px] pl-11 pr-14 py-4 rounded-2xl border-none bg-white text-[#1b0d0d] shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] ring-1 ring-gray-100 placeholder:text-[#666666]/50 focus:ring-2 focus:ring-[#d41111]/20 text-sm font-medium transition-all focus:outline-none"
              placeholder="输入遗址编号 (Manual ID Entry)"
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-2">
              <button className="p-2 aspect-square flex items-center justify-center rounded-xl bg-[#d41111]/10 text-[#d41111] hover:bg-[#d41111] hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </div>
          </label>
        </div>

        {/* 最近浏览 */}
        <div className="w-full flex flex-col gap-3">
          <div className="flex items-center justify-between px-1 mb-1">
            <h3 className="text-sm font-bold text-[#1b0d0d]">最近浏览 (History)</h3>
            <button className="text-xs text-[#d41111] font-medium hover:text-[#a30d0d] px-2 py-1 rounded-lg hover:bg-[#d41111]/5 transition-colors">
              View All
            </button>
          </div>

          {recentHistory.map((item) => (
            <div
              key={item.id}
              className="group relative w-full flex items-center p-3 bg-white rounded-2xl shadow-[0_1px_3px_rgba(0,0,0,0.05),0_1px_2px_rgba(0,0,0,0.1)] border border-transparent hover:border-[#d41111]/10 transition-all cursor-pointer active:scale-[0.99]"
            >
              <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-gray-100">
                <img
                  alt={item.name}
                  className="h-full w-full object-cover"
                  src={item.image}
                />
              </div>
              <div className="ml-3 flex-1 min-w-0">
                <h4 className="text-sm font-bold text-[#1b0d0d] truncate">{item.name}</h4>
                <p className="text-[11px] text-[#666666] mt-0.5 truncate">{item.nameEn}</p>
              </div>
              <div className="ml-2 flex flex-col items-end gap-1.5 self-center">
                <span className="text-[10px] font-medium text-[#666666] bg-gray-100 px-2 py-0.5 rounded-full">
                  {item.time}
                </span>
                <svg 
                  className={`w-4.5 h-4.5 ${item.time === 'Today' ? 'text-[#d41111]' : 'text-gray-300'}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </main>
      {/* 底部导航栏 */}
      <BottomNav activePage="扫码" onNavigate={onNavigate} />
    </div>
  );
}