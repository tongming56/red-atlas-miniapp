// app.js - 小程序入口文件
App({
  onLaunch() {
    // 小程序启动时执行
    console.log('福建红色图谱小程序启动')

    // 获取系统信息（使用新API）
    const windowInfo = wx.getWindowInfo()
    const deviceInfo = wx.getDeviceInfo()

    // 兼容旧版本
    this.globalData.systemInfo = {
      ...windowInfo,
      ...deviceInfo
    }
    this.globalData.statusBarHeight = windowInfo.statusBarHeight || 0
    this.globalData.navBarHeight = 44 // 导航栏高度

    // 检查更新
    this.checkUpdate()
  },

  onShow() {
    // 小程序显示时执行
  },

  onHide() {
    // 小程序隐藏时执行
  },

  // 检查小程序更新
  checkUpdate() {
    if (wx.canIUse('getUpdateManager')) {
      const updateManager = wx.getUpdateManager()
      updateManager.onCheckForUpdate((res) => {
        if (res.hasUpdate) {
          updateManager.onUpdateReady(() => {
            wx.showModal({
              title: '更新提示',
              content: '新版本已准备好，是否重启应用？',
              success(res) {
                if (res.confirm) {
                  updateManager.applyUpdate()
                }
              }
            })
          })
        }
      })
    }
  },

  // 全局数据
  globalData: {
    systemInfo: null,
    statusBarHeight: 0,
    navBarHeight: 44,
    // 收藏列表
    favorites: [],
    // 扫码历史
    scanHistory: []
  }
})
