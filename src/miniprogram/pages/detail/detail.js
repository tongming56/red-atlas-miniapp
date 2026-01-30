// pages/detail/detail.js
const app = getApp()

Page({
  data: {
    statusBarHeight: 0,
    expanded: false,
    isFavorite: false,
    building: {
      id: 1,
      name: '闽东苏维埃政府旧址',
      address: '福建省宁德市福安市柏柱洋',
      province: '福建省',
      city: '宁德市',
      latitude: 26.9833,
      longitude: 119.65,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk4Gg8kE0Ip4gQwP80dw9c9pzYnvBhmXl3QjqKeFG1sBFdfOZOk8LwiEA0nWmKO3KQRBSsez2e2CnrX6eq_idc1Pc2YbLnN-qs6wP0eOjaCfjSl-iKKd6Iq5t_mvlCho18IHO9S68mg8qBAd9RCe3dg13ASqcsCs31W_FWPr72EAM7F0G3ZI4VrbmD1Zlfw48rslTtNtd0xu1ej9Pj92D1D8dv2shXYxW1hTa676WvvXT6F34hSNKTt-Qx-6Mk3qYLFMxVuwasDd_l',
      description: '位于群山环抱之中，该遗址在20世纪30年代曾是革命力量的指挥中心。这里保存了当年苏维埃政府办公的旧貌，见证了那段烽火连天的峥嵘岁月。建筑风格独特，具有典型的闽东民居特色，同时也承载着厚重的红色历史记忆。',
      views: 12403,
      openTime: '09:00 - 17:00 (周一闭馆)',
      ticketPrice: '免费参观'
    }
  },

  onLoad(options) {
    // 获取状态栏高度
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 20
    })

    // 根据ID加载建筑详情
    if (options.id) {
      this.loadBuilding(options.id)
    }

    // 检查是否已收藏
    this.checkFavorite()
  },

  /**
   * 加载建筑详情
   */
  loadBuilding(id) {
    // Mock数据，根据ID匹配对应建筑
    const buildings = {
      '1': {
        id: 1,
        name: '古田会议会址',
        address: '福建省龙岩市上杭县古田镇',
        province: '福建省',
        city: '龙岩市',
        latitude: 25.0841,
        longitude: 116.8575,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B',
        description: '古田会议会址，原为廖氏宗祠，又名万源祠。位于福建省龙岩市上杭县古田镇采眉岭笔架山下。建于清道光二十八年（1848年）的单层歇山式建筑，始建于清道光二十八年（1848年）。1929年12月，毛泽东同志主持的红四军第九次代表大会在此召开，史称"古田会议"，是我党我军建设史上的重要里程碑。',
        views: 15832,
        openTime: '08:30 - 17:30',
        ticketPrice: '免费参观（需预约）'
      },
      '2': {
        id: 2,
        name: '长汀革命旧址',
        address: '福建省龙岩市长汀县',
        province: '福建省',
        city: '龙岩市',
        latitude: 25.8333,
        longitude: 116.3667,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH',
        description: '长汀是中央苏区的经济中心，被誉为"红色小上海"。这里曾是中华苏维埃共和国的经济中心，毛泽东、朱德、周恩来等老一辈革命家都曾在此战斗和生活。长汀革命旧址群包括福建省苏维埃政府旧址、红军医院旧址等众多革命遗迹。',
        views: 8924,
        openTime: '09:00 - 17:00',
        ticketPrice: '免费参观'
      },
      '3': {
        id: 3,
        name: '建宁中央苏区反围剿纪念园',
        address: '福建省三明市建宁县',
        province: '福建省',
        city: '三明市',
        latitude: 26.8333,
        longitude: 116.85,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI',
        description: '建宁是第二次国内革命战争时期中央苏区的重要组成部分，是中央苏区反"围剿"的前沿阵地。1931年至1934年间，毛泽东、周恩来、朱德等领导人曾在建宁指挥反"围剿"作战。纪念园集中展示了建宁在土地革命战争时期的重要历史地位。',
        views: 6543,
        openTime: '09:00 - 17:30 (周一闭馆)',
        ticketPrice: '免费参观'
      }
    }

    const building = buildings[id]
    if (building) {
      this.setData({ building })
    } else {
      wx.showToast({
        title: '建筑信息不存在',
        icon: 'none'
      })
    }
  },

  /**
   * 检查是否已收藏
   */
  checkFavorite() {
    const favorites = app.globalData.favorites || []
    const isFavorite = favorites.some(item => item.id === this.data.building.id)
    this.setData({ isFavorite })
  },

  /**
   * 返回上一页
   */
  goBack() {
    wx.navigateBack()
  },

  /**
   * 展开/收起简介
   */
  toggleExpand() {
    this.setData({
      expanded: !this.data.expanded
    })
  },

  /**
   * 切换收藏状态
   */
  toggleFavorite() {
    const { building, isFavorite } = this.data

    if (isFavorite) {
      // 取消收藏
      const favorites = app.globalData.favorites.filter(item => item.id !== building.id)
      app.globalData.favorites = favorites

      this.setData({ isFavorite: false })
      wx.showToast({
        title: '已取消收藏',
        icon: 'success'
      })
    } else {
      // 添加收藏
      const favoriteItem = {
        id: building.id,
        name: building.name,
        location: building.city,
        image: building.image,
        time: '刚刚'
      }

      app.globalData.favorites = app.globalData.favorites || []
      app.globalData.favorites.unshift(favoriteItem)

      this.setData({ isFavorite: true })
      wx.showToast({
        title: '收藏成功',
        icon: 'success'
      })
    }
  },

  /**
   * 跳转到3D模型页
   */
  goTo3D() {
    wx.navigateTo({
      url: `/pages/model3d/model3d?id=${this.data.building.id}`
    })
  },

  /**
   * 跳转到知识图谱页
   */
  goToGraph() {
    wx.navigateTo({
      url: `/pages/graph/graph?id=${this.data.building.id}`
    })
  },

  /**
   * 地图导航
   */
  navigate() {
    wx.navigateTo({
      url: `/pages/map/map?id=${this.data.building.id}`
    })
  },

  /**
   * 分享配置
   */
  onShareAppMessage() {
    return {
      title: this.data.building.name,
      path: `/pages/detail/detail?id=${this.data.building.id}`,
      imageUrl: this.data.building.image
    }
  }
})
