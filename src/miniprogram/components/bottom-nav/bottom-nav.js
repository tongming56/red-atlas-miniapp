// components/bottom-nav/bottom-nav.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    activePage: {
      type: String,
      value: 'index'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    // 跳转到首页
    goToHome() {
      if (this.properties.activePage !== 'index') {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }
    },

    // 跳转到扫码页
    goToScan() {
      if (this.properties.activePage !== 'scan') {
        wx.switchTab({
          url: '/pages/scan/scan'
        })
      }
    },

    // 跳转到收藏页
    goToFavorites() {
      if (this.properties.activePage !== 'favorites') {
        wx.switchTab({
          url: '/pages/favorites/favorites'
        })
      }
    }
  }
})
