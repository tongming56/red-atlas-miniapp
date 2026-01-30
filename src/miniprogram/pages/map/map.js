// pages/map/map.js
const app = getApp()

Page({
  data: {
    statusBarHeight: 0,
    building: {
      id: 1,
      name: '建筑名称',
      address: '建筑地址',
      latitude: 26.0,
      longitude: 119.0,
      image: ''
    },
    centerLatitude: 26.0,
    centerLongitude: 119.0,
    scale: 14,
    markers: [],
    userLocation: null,
    distance: null
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

    // 获取用户位置
    this.getUserLocation()
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
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B'
      },
      '2': {
        id: 2,
        name: '长汀革命旧址',
        address: '福建省龙岩市长汀县',
        province: '福建省',
        city: '龙岩市',
        latitude: 25.8333,
        longitude: 116.3667,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH'
      },
      '3': {
        id: 3,
        name: '建宁中央苏区反围剿纪念园',
        address: '福建省三明市建宁县',
        province: '福建省',
        city: '三明市',
        latitude: 26.8333,
        longitude: 116.85,
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI'
      }
    }

    const building = buildings[id]
    if (building) {
      this.setData({
        building,
        centerLatitude: building.latitude,
        centerLongitude: building.longitude
      })

      // 创建建筑标记点
      this.createMarker()
    } else {
      wx.showToast({
        title: '建筑信息不存在',
        icon: 'none'
      })
    }
  },

  /**
   * 获取用户当前位置
   */
  getUserLocation() {
    wx.getLocation({
      type: 'gcj02',
      success: (res) => {
        this.setData({
          userLocation: {
            latitude: res.latitude,
            longitude: res.longitude
          }
        })

        // 计算距离
        this.calculateDistance()
      },
      fail: (err) => {
        console.error('获取位置失败:', err)
        wx.showModal({
          title: '提示',
          content: '需要获取您的位置信息才能提供导航服务，请在设置中开启位置权限。',
          confirmText: '去设置',
          success: (res) => {
            if (res.confirm) {
              wx.openSetting()
            }
          }
        })
      }
    })
  },

  /**
   * 创建建筑标记点
   */
  createMarker() {
    const marker = {
      id: this.data.building.id,
      latitude: this.data.building.latitude,
      longitude: this.data.building.longitude,
      iconPath: '/assets/icons/location-red.svg',
      width: 40,
      height: 40,
      title: this.data.building.name,
      callout: {
        content: this.data.building.name,
        color: '#FFFFFF',
        fontSize: 14,
        bgColor: '#D41111',
        borderRadius: 8,
        padding: 8,
        display: 'ALWAYS'
      }
    }

    this.setData({
      markers: [marker]
    })
  },

  /**
   * 计算用户到建筑的距离
   */
  calculateDistance() {
    if (!this.data.userLocation) return

    const distance = this.getDistance(
      this.data.userLocation.latitude,
      this.data.userLocation.longitude,
      this.data.building.latitude,
      this.data.building.longitude
    )

    let distanceText = ''
    if (distance < 1) {
      distanceText = Math.round(distance * 1000) + 'm'
    } else {
      distanceText = distance.toFixed(1) + 'km'
    }

    this.setData({
      distance: distanceText
    })
  },

  /**
   * 计算两个坐标点之间的距离（单位：km）
   */
  getDistance(lat1, lng1, lat2, lng2) {
    const radLat1 = lat1 * Math.PI / 180.0
    const radLat2 = lat2 * Math.PI / 180.0
    const a = radLat1 - radLat2
    const b = lng1 * Math.PI / 180.0 - lng2 * Math.PI / 180.0
    let distance = 2 * Math.asin(Math.sqrt(
      Math.pow(Math.sin(a / 2), 2) +
      Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)
    ))
    distance = distance * 6378.137
    distance = Math.round(distance * 10000) / 10000
    return distance
  },

  /**
   * 移动到用户当前位置
   */
  moveToMyLocation() {
    if (!this.data.userLocation) {
      this.getUserLocation()
      return
    }

    const mapContext = wx.createMapContext('buildingMap', this)
    mapContext.moveToLocation({
      latitude: this.data.userLocation.latitude,
      longitude: this.data.userLocation.longitude
    })
  },

  /**
   * 放大地图
   */
  zoomIn() {
    const newScale = Math.min(this.data.scale + 1, 18)
    this.setData({ scale: newScale })
  },

  /**
   * 缩小地图
   */
  zoomOut() {
    const newScale = Math.max(this.data.scale - 1, 5)
    this.setData({ scale: newScale })
  },

  /**
   * 开始导航
   */
  startNavigation() {
    wx.openLocation({
      latitude: this.data.building.latitude,
      longitude: this.data.building.longitude,
      name: this.data.building.name,
      address: this.data.building.address,
      scale: 15
    })
  },

  /**
   * 拨打电话
   */
  callPhone() {
    if (!this.data.building.phoneNumber) {
      wx.showToast({
        title: '暂无联系电话',
        icon: 'none'
      })
      return
    }

    wx.makePhoneCall({
      phoneNumber: this.data.building.phoneNumber
    })
  },

  /**
   * 返回上一页
   */
  goBack() {
    wx.navigateBack()
  }
})
