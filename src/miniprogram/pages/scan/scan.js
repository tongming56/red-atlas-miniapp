// pages/scan/scan.js
const app = getApp()

Page({
  /**
   * 页面的初始数据
   */
  data: {
    statusBarHeight: 0,
    scanHistory: [
      {
        id: 1,
        name: '古田会议会址',
        nameEn: 'Gutian Conference Site',
        location: '龙岩市 · 上杭县',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B',
        time: '2026-01-30 14:23',
        timeClass: 'time-today'
      },
      {
        id: 2,
        name: '长汀革命旧址',
        nameEn: 'Changting Revolutionary Site',
        location: '龙岩市 · 长汀县',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH',
        time: '2026-01-29 16:45',
        timeClass: 'time-yesterday'
      },
      {
        id: 3,
        name: '建宁中央苏区反围剿纪念园',
        nameEn: 'Jianning Anti-Encirclement Memorial',
        location: '三明市 · 建宁县',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI',
        time: '2026-01-27 09:18',
        timeClass: 'time-older'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 20
    })
  },

  /**
   * 返回上一页
   */
  goBack() {
    wx.switchTab({
      url: '/pages/index/index'
    })
  },

  /**
   * 开始扫码
   */
  startScan() {
    wx.scanCode({
      onlyFromCamera: true,
      scanType: ['qrCode', 'barCode'],
      success: (res) => {
        console.log('扫码结果:', res)
        // TODO: 解析扫码结果，跳转到对应详情页
        wx.showToast({
          title: '识别成功',
          icon: 'success',
          duration: 1500
        })
        
        // 模拟跳转到详情页
        setTimeout(() => {
          wx.navigateTo({
            url: '/pages/detail/detail?id=1'
          })
        }, 1500)
      },
      fail: (err) => {
        console.error('扫码失败:', err)
        if (err.errMsg !== 'scanCode:fail cancel') {
          wx.showToast({
            title: '扫码失败',
            icon: 'none',
            duration: 1500
          })
        }
      }
    })
  },

  /**
   * 清空历史
   */
  clearHistory() {
    wx.showModal({
      title: '提示',
      content: '确定要清空所有扫码记录吗？',
      confirmColor: '#B71C1C',
      success: (res) => {
        if (res.confirm) {
          this.setData({
            scanHistory: []
          })
          wx.showToast({
            title: '已清空',
            icon: 'success',
            duration: 1500
          })
        }
      }
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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
  }
})
