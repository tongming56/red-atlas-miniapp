// pages/favorites/favorites.js
const app = getApp()

Page({
  data: {
    statusBarHeight: 0,
    activeFilter: '全部',
    isEditMode: false,
    selectedCount: 0,
    favorites: [
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
    ]
  },

  onLoad(options) {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 20
    })
    this.loadFavorites()
  },

  loadFavorites() {
    // TODO: 从本地存储或服务器加载收藏列表
    const favorites = app.globalData.favorites || this.data.favorites
    this.setData({ favorites })
  },

  changeFilter(e) {
    const filter = e.currentTarget.dataset.filter
    this.setData({
      activeFilter: filter
    })
    
    wx.showToast({
      title: `已切换到${filter}`,
      icon: 'none',
      duration: 1500
    })
  },

  toggleFavorite(e) {
    const id = e.currentTarget.dataset.id
    wx.showModal({
      title: '提示',
      content: '确定要取消收藏吗？',
      confirmColor: '#B71C1C',
      success: (res) => {
        if (res.confirm) {
          const favorites = this.data.favorites.filter(item => item.id !== id)
          this.setData({ favorites })
          
          // TODO: 更新本地存储或服务器
          app.globalData.favorites = favorites
          
          wx.showToast({
            title: '已取消收藏',
            icon: 'success',
            duration: 1500
          })
        }
      }
    })
  },

  goToDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  goToExplore() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  // 切换编辑模式
  toggleEditMode() {
    const isEditMode = !this.data.isEditMode

    if (!isEditMode) {
      // 退出编辑模式，清除所有选择
      const favorites = this.data.favorites.map(item => ({
        ...item,
        selected: false
      }))
      this.setData({
        isEditMode: false,
        favorites,
        selectedCount: 0
      })
    } else {
      this.setData({
        isEditMode: true
      })
    }
  },

  // 切换单个项目的选择状态
  toggleSelect(e) {
    const id = e.currentTarget.dataset.id
    const favorites = this.data.favorites.map(item => {
      if (item.id === id) {
        return { ...item, selected: !item.selected }
      }
      return item
    })

    const selectedCount = favorites.filter(item => item.selected).length

    this.setData({
      favorites,
      selectedCount
    })
  },

  // 全选/取消全选
  toggleSelectAll() {
    const { favorites, selectedCount } = this.data
    const isAllSelected = selectedCount === favorites.length && favorites.length > 0

    const updatedFavorites = favorites.map(item => ({
      ...item,
      selected: !isAllSelected
    }))

    this.setData({
      favorites: updatedFavorites,
      selectedCount: isAllSelected ? 0 : favorites.length
    })
  },

  // 批量删除
  batchDelete() {
    const { selectedCount, favorites } = this.data

    if (selectedCount === 0) {
      return
    }

    wx.showModal({
      title: '提示',
      content: `确定要删除选中的 ${selectedCount} 个收藏吗？`,
      confirmColor: '#B71C1C',
      success: (res) => {
        if (res.confirm) {
          const remainingFavorites = favorites.filter(item => !item.selected)

          this.setData({
            favorites: remainingFavorites,
            selectedCount: 0,
            isEditMode: false
          })

          // TODO: 更新本地存储或服务器
          app.globalData.favorites = remainingFavorites

          wx.showToast({
            title: `已删除 ${selectedCount} 个收藏`,
            icon: 'success',
            duration: 1500
          })
        }
      }
    })
  },

  onShow() {
    // 刷新收藏列表
    this.loadFavorites()

    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
  }
})
