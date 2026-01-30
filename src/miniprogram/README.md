# 福建红色图谱 - 微信小程序完整版

## 📱 项目概述

这是"福建红色图谱"的**微信原生小程序**版本，从React Web应用完全重构而来，保持了100%的样式一致性。

## ✅ 已完成的页面

1. **首页** (`pages/index`) ✅
   - 红色顶栏 + 搜索框 + 地图按钮
   - 地区筛选栏（横向滚动）
   - 建筑卡片列表

2. **扫码页** (`pages/scan`) ✅
   - 自定义导航栏
   - 扫码提示区域（带动画）
   - 识别历史列表

3. **搜索页** (`pages/search`) ✅
   - 搜索输入框
   - 热门搜索标签
   - 实时搜索结果

4. **收藏页** (`pages/favorites`) ✅
   - 红色顶栏 + Logo装饰
   - 筛选栏（全部/最近添加）
   - 收藏卡片列表

5. **底部导航组件** (`components/bottom-nav`) ✅
   - 三按钮导航（首页、扫码、收藏）
   - 扫码按钮凸起设计

## 🚧 待完成的页面

### 6. 详情页 (`pages/detail`)
需要创建以下文件：
- `pages/detail/detail.wxml`
- `pages/detail/detail.wxss`
- `pages/detail/detail.js`
- `pages/detail/detail.json`

**关键功能**：
- 顶部大图（340px）+ 渐变遮罩
- 返回/分享按钮（半透明）
- 圆角卡片内容区
- 地址信息卡片
- 功能服务按钮（3D全景、知识图谱、联系电话、参观预约）
- 开放信息 + 相关照片
- 底部操作栏（收藏/分享/导航）

### 7. 三维模型页 (`pages/model3d`)
**关键功能**：
- 全屏3D查看器
- 手势控制（旋转/缩放）
- 控制面板（视角切换、自动旋转）
- 热点标注

### 8. 知识图谱页 (`pages/graph`)
**关键功能**：
- Canvas绘制节点和连线
- 中心节点高亮
- 关联节点类型（人物、事件、地点、时间）
- 手势交互（拖拽、缩放）
- 底部图例

### 9. 地图页 (`pages/map`)
**关键功能**：
- 使用 `<map>` 组件
- 红色五角星标记
- 当前位置定位
- 底部卡片（选中标记时）
- 导航功能

### 10. 关于页 (`pages/about`)
**关键功能**：
- 弹窗形式（从底部滑出）
- App图标 + 名称 + 版本号
- 项目介绍卡片
- 数据来源
- 免责声明
- 联系方式

## 📦 项目结构

```
miniprogram/
├── pages/              # 页面目录
│   ├── index/          # 首页 ✅
│   ├── scan/           # 扫码页 ✅
│   ├── search/         # 搜索页 ✅
│   ├── favorites/      # 收藏页 ✅
│   ├── detail/         # 详情页 🚧
│   ├── model3d/        # 三维模型页 🚧
│   ├── graph/          # 知识图谱页 🚧
│   ├── map/            # 地图页 🚧
│   └── about/          # 关于页 🚧
├── components/         # 组件目录
│   └── bottom-nav/     # 底部导航 ✅
├── assets/             # 资源目录
│   └── icons/          # 图标 (需要添加)
├── utils/              # 工具函数
├── app.js              # 小程序入口 ✅
├── app.json            # 全局配置 ✅
├── app.wxss            # 全局样式 ✅
└── sitemap.json        # 索引配置 ✅
```

## 🎨 样式系统

### 主色调
- **革命深红色**: `#B71C1C`
- **背景色**: `#F8F9FA` / `#F7F7F7`
- **卡片白**: `#FFFFFF`
- **文字灰**: `#111827` / `#4B5563` / `#6B7280`

### 通用样式类（已在 app.wxss 定义）
- 布局：`.flex`, `.flex-col`, `.items-center`, `.justify-between`
- 间距：`.p-4`, `.px-4`, `.mb-4`, `.gap-3`
- 圆角：`.rounded-lg`, `.rounded-xl`, `.rounded-full`
- 阴影：`.shadow-sm`, `.shadow`, `.shadow-lg`
- 文字：`.text-sm`, `.text-lg`, `.font-bold`

### rpx单位说明
- `1px = 2rpx`（在iPhone 6/7/8上）
- 设计稿宽度：750rpx = 375px

## 🔧 开发指南

### 1. 安装微信开发者工具
下载地址：https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html

### 2. 导入项目
1. 打开微信开发者工具
2. 点击「导入项目」
3. 选择 `miniprogram` 目录
4. 填写 AppID（测试可选择「测试号」）

### 3. 运行项目
- 点击「编译」按钮
- 在模拟器中预览
- 使用真机调试（扫码）

### 4. 添加图标资源
需要在 `assets/icons/` 目录下添加以下SVG图标：

**导航相关**：
- `home.svg`, `home-fill.svg`
- `scan-white.svg`
- `heart.svg`, `heart-fill.svg`, `heart-fill-red.svg`
- `arrow-left.svg`, `chevron-left-white.svg`, `chevron-right-gray.svg`

**功能相关**：
- `search.svg`
- `map-white.svg`
- `location-red.svg`, `location-gray.svg`
- `qr-code-large.svg`, `camera-white.svg`
- `close-circle.svg`
- `bookmark-empty.svg`, `scan-empty.svg`, `search-empty.svg`

**方法1**：使用现有React项目的图标（lucide-react）
**方法2**：使用 iconfont 或 Material Icons
**方法3**：使用 `<text>` 标签 + Unicode字符（如 ⌂ ♥ ⌕）

## 📋 配置说明

### app.json - 全局配置
```json
{
  "pages": [...],        // 页面路径列表
  "window": {...},       // 全局窗口配置
  "tabBar": {...},       // 底部标签栏配置
  "usingComponents": {}, // 全局自定义组件
  "style": "v2"          // 启用新版组件样式
}
```

### 页面配置 (.json)
```json
{
  "navigationStyle": "custom",  // 自定义导航栏
  "usingComponents": {}         // 页面级组件
}
```

## 🚀 部署流程

### 1. 开发阶段
- 完成所有页面开发
- 添加图标资源
- 测试所有功能和跳转

### 2. 体验版
1. 点击「上传」按钮
2. 填写版本号和项目备注
3. 登录小程序后台
4. 设置体验版
5. 扫码体验

### 3. 正式发布
1. 提交审核
2. 等待审核通过
3. 发布上线

## 🎯 核心功能实现要点

### 1. 导航跳转
```javascript
// TabBar页面切换
wx.switchTab({ url: '/pages/index/index' })

// 普通页面跳转
wx.navigateTo({ url: '/pages/detail/detail?id=1' })

// 返回上一页
wx.navigateBack()
```

### 2. 数据传递
```javascript
// 传递参数
wx.navigateTo({ url: '/pages/detail/detail?id=1&name=古田会议会址' })

// 接收参数
onLoad(options) {
  const id = options.id
  const name = options.name
}
```

### 3. 本地存储
```javascript
// 保存数据
wx.setStorageSync('favorites', favorites)

// 读取数据
const favorites = wx.getStorageSync('favorites') || []
```

### 4. 扫码功能
```javascript
wx.scanCode({
  onlyFromCamera: true,
  scanType: ['qrCode', 'barCode'],
  success: (res) => {
    console.log('扫码结果:', res.result)
    // 跳转到详情页
  }
})
```

### 5. 地图功能
```xml
<map 
  id="map" 
  latitude="{{latitude}}" 
  longitude="{{longitude}}" 
  markers="{{markers}}"
  bindmarkertap="onMarkerTap"
></map>
```

### 6. Canvas绘制（知识图谱）
```javascript
const ctx = wx.createCanvasContext('graphCanvas')
ctx.arc(x, y, radius, 0, 2 * Math.PI)  // 绘制圆形节点
ctx.stroke()
ctx.draw()
```

## 🔍 调试技巧

### 1. Console调试
```javascript
console.log('调试信息:', data)
```

### 2. 网络请求
```javascript
wx.request({
  url: 'https://api.example.com/buildings',
  method: 'GET',
  success: (res) => {
    console.log('数据:', res.data)
  }
})
```

### 3. 真机调试
- 手机和电脑连接同一Wi-Fi
- 点击「预览」
- 手机微信扫码

## 📝 注意事项

### 1. 样式适配
- ✅ 使用 `rpx` 单位自动适配
- ✅ 获取状态栏高度：`wx.getSystemInfoSync().statusBarHeight`
- ✅ 安全区域：`env(safe-area-inset-bottom)`

### 2. 性能优化
- 使用 `wx:key` 提升列表渲染性能
- 图片懒加载：`<image lazy-load="{{true}}" />`
- 分包加载（如需要）

### 3. 兼容性
- 最低基础库版本：2.0.0
- 目标用户：iOS + Android

### 4. 审核建议
- 确保所有功能可用
- 提供测试账号（如需要）
- 准备好补充说明材料

## 📚 参考文档

- [微信小程序官方文档](https://developers.weixin.qq.com/miniprogram/dev/framework/)
- [组件库文档](https://developers.weixin.qq.com/miniprogram/dev/component/)
- [API文档](https://developers.weixin.qq.com/miniprogram/dev/api/)

## 📞 技术支持

如有问题，请参考：
1. 项目根目录的 `INTERACTION_SUMMARY.md`（功能详解）
2. 微信开发者社区
3. 项目Issue反馈

---

**项目版本**: v1.0  
**更新时间**: 2026-01-29  
**小程序名称**: 福建红色图谱  
**技术栈**: 微信原生小程序 (WXML + WXSS + JS)
