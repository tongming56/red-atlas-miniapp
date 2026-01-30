Component({
  data: {
    selected: 0,
    color: "#9CA3AF",
    selectedColor: "#B71C1C",
    list: [
      {
        pagePath: "/pages/index/index",
        text: "首页",
        iconPath: "/assets/icons/home.svg",
        selectedIconPath: "/assets/icons/home-fill.svg"
      },
      {
        pagePath: "/pages/scan/scan",
        text: "扫码",
        iconPath: "/assets/icons/scan.png",
        selectedIconPath: "/assets/icons/scan-active.png"
      },
      {
        pagePath: "/pages/favorites/favorites",
        text: "收藏",
        iconPath: "/assets/icons/heart.svg",
        selectedIconPath: "/assets/icons/heart-fill.svg"
      }
    ]
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
