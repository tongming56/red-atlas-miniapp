// pages/index/index.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0,
    activeRegion: '全省',
    regions: ['全省', '闽东', '闽北', '闽西', '闽南'],
    buildings: [
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
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 获取状态栏高度
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 20
    })
  },

  /**
   * 切换地区
   */
  changeRegion(e) {
    const region = e.currentTarget.dataset.region
    this.setData({
      activeRegion: region
    })
    
    // TODO: 根据地区筛选建筑列表
    wx.showToast({
      title: `已切换到${region}`,
      icon: 'none',
      duration: 1500
    })
  },

  /**
   * 跳转到搜索页
   */
  goToSearch() {
    wx.navigateTo({
      url: '/pages/search/search'
    })
  },

  /**
   * 跳转到地图页
   */
  goToMap() {
    wx.navigateTo({
      url: '/pages/map/map'
    })
  },

  /**
   * 跳转到详情页
   */
  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    // 每次显示页面时，刷新tabBar选中状态
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 0
      })
    }
  }
})
