import { ArrowLeft, Map, Database, Scale, AtSign, Copy } from 'lucide-react';
import appIcon from "figma:asset/f8bc99ed397b8c49fd10c946a22d46a956554bd7.png";
import BottomNav from './BottomNav';

export default function AboutPage({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <div className="relative w-full h-screen flex flex-col bg-[#f5f5f7] overflow-hidden">
      {/* 顶部标题栏 */}
      <header className="shrink-0 z-50 flex h-[44px] w-full items-center justify-between bg-white/80 px-4 backdrop-blur-md border-b border-gray-200/80 sticky top-0">
        <div 
          onClick={() => onNavigate('首页')}
          className="flex items-center -ml-2 p-2 text-[#d41111] cursor-pointer active:opacity-50 transition-opacity"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-[16px] ml-0.5 font-medium">返回</span>
        </div>
        <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[17px] font-semibold text-[#1d1d1f]">
          关于项目
        </h1>
        <div className="w-[60px]"></div>
      </header>

      {/* 主内容区 */}
      <main className="flex-1 overflow-y-auto px-4 pt-6 pb-12 no-scrollbar">
        {/* App图标和名称 */}
        <div className="flex flex-col items-center mb-6">
          <div className="relative group cursor-default mb-4">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-tr from-[#d41111]/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative flex size-[88px] items-center justify-center overflow-hidden rounded-[22px] bg-white shadow-sm border border-gray-200/50">
              <img src={appIcon} alt="红图小程序" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-[#d41111]/10 mix-blend-overlay"></div>
            </div>
          </div>
          <h2 className="text-[20px] font-bold tracking-tight text-[#1d1d1f] mb-1">红图小程序</h2>
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-gray-200/50">
            <span className="text-[12px] font-medium text-[#86868b]">Version 1.0.2</span>
          </div>
        </div>

        {/* 信息卡片 */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* 项目介绍 */}
          <section className="p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Map className="w-5 h-5 text-[#d41111]" />
              <h3 className="text-[15px] font-bold text-[#1d1d1f]">项目介绍</h3>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-600 text-justify">
              本项目旨在数字化并绘制闽东与闽北地区的革命遗址地图。通过实地考察与档案整理，我们将散落在各地的红色印记汇聚于云端，弘扬红色文化，为历史研究者及游客提供准确、详实的地理信息服务。
            </p>
          </section>

          <div className="mx-5 h-px bg-[#d41111]/10"></div>

          {/* 数据来源 */}
          <section className="p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Database className="w-5 h-5 text-[#d41111]" />
              <h3 className="text-[15px] font-bold text-[#1d1d1f]">数据来源</h3>
            </div>
            <div className="text-[14px] leading-relaxed text-gray-600">
              <p className="mb-2">本程序所展示的数据主要来源于：</p>
              <ul className="flex flex-col gap-1.5">
                <li className="flex items-start gap-2.5">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#d41111]/60"></span>
                  <span>各级地方志办公室公开档案</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#d41111]/60"></span>
                  <span>党史研究室出版文献</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="mt-[7px] size-1.5 shrink-0 rounded-full bg-[#d41111]/60"></span>
                  <span>志愿者实地考察采集数据</span>
                </li>
              </ul>
            </div>
          </section>

          <div className="mx-5 h-px bg-[#d41111]/10"></div>

          {/* 免责声明 */}
          <section className="p-5">
            <div className="flex items-center gap-2.5 mb-2.5">
              <Scale className="w-5 h-5 text-[#d41111]" />
              <h3 className="text-[15px] font-bold text-[#1d1d1f]">免责声明</h3>
            </div>
            <p className="text-[14px] leading-relaxed text-gray-600 text-justify">
              本程序提供的地理位置及历史信息仅供参考。由于行政区划调整或遗址现状变化，实地探访前请务必核实最新路况及当地开放政策。开发者不对因使用本程序数据导致的任何损失承担责任。
            </p>
          </section>

          <div className="mx-5 h-px bg-[#d41111]/10"></div>

          {/* 联系方式 */}
          <section className="p-5">
            <div className="flex items-center gap-2.5 mb-3">
              <AtSign className="w-5 h-5 text-[#d41111]" />
              <h3 className="text-[15px] font-bold text-[#1d1d1f]">联系方式</h3>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                  组织机构
                </span>
                <span className="text-[14px] font-medium text-[#1d1d1f]">
                  福建红色历史文化研究小组
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[#86868b]">
                  电子邮箱
                </span>
                <div className="flex items-center justify-between group">
                  <a 
                    className="text-[14px] font-medium text-[#d41111] hover:text-red-700 transition-colors" 
                    href="mailto:contact@redmapproject.cn"
                  >
                    contact@redmapproject.cn
                  </a>
                  <button 
                    className="text-[#86868b] hover:text-[#d41111] transition-colors opacity-100"
                    title="复制邮箱"
                    onClick={() => {
                      navigator.clipboard.writeText('contact@redmapproject.cn');
                    }}
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* 底部版权信息 */}
        <footer className="mt-8 text-center pb-4">
          <p className="text-[11px] leading-relaxed text-[#86868b]/60">
            © 2023 Fujian Historical Research Group.<br/>
            All rights reserved.
          </p>
        </footer>
      </main>

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