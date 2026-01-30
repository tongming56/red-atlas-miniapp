// pages/graph/graph.js
const app = getApp()

Page({
  data: {
    statusBarHeight: 0,
    building: {
      id: 1,
      name: '建筑名称',
      city: '城市',
      relatedPeople: [],
      relatedEvents: [],
      relatedBuildings: [],
      timeline: []
    },
    graphNodeCount: 0,
    canvasWidth: 0,
    canvasHeight: 0
  },

  onLoad(options) {
    // 获取状态栏高度
    this.setData({
      statusBarHeight: app.globalData.statusBarHeight || 20
    })

    // 根据ID加载建筑知识图谱
    if (options.id) {
      this.loadKnowledgeGraph(options.id)
    }
  },

  onReady() {
    // 获取系统信息
    const systemInfo = wx.getWindowInfo()
    const canvasWidth = systemInfo.windowWidth - 80  // 减去左右padding
    const canvasHeight = 500

    this.setData({
      canvasWidth,
      canvasHeight
    })

    // 延迟绘制，确保数据已加载
    setTimeout(() => {
      this.drawKnowledgeGraph()
    }, 300)
  },

  /**
   * 加载知识图谱数据
   */
  loadKnowledgeGraph(id) {
    // Mock数据，根据ID匹配对应建筑的知识图谱
    const knowledgeGraphs = {
      '1': {
        id: 1,
        name: '古田会议会址',
        city: '龙岩市',
        relatedPeople: [
          {
            name: '毛泽东',
            avatar: '👤',
            role: '会议主持人',
            description: '主持召开古田会议，确立了党对军队绝对领导的原则'
          },
          {
            name: '朱德',
            avatar: '👤',
            role: '红四军军长',
            description: '参与古田会议，坚决支持毛泽东的建军思想'
          },
          {
            name: '陈毅',
            avatar: '👤',
            role: '红四军政治部主任',
            description: '负责会议筹备工作，传达中央指示精神'
          }
        ],
        relatedEvents: [
          {
            date: '1929年12月',
            title: '古田会议召开',
            description: '红四军第九次代表大会在古田召开，通过了《古田会议决议》，确立了思想建党、政治建军的原则'
          },
          {
            date: '1929年6月',
            title: '红四军七大',
            description: '红四军在龙岩召开第七次代表大会，会上对军队建设问题产生分歧'
          },
          {
            date: '1930年1月',
            title: '决议传达',
            description: '古田会议决议在红军各部队传达贯彻，对人民军队建设产生深远影响'
          }
        ],
        relatedBuildings: [
          {
            id: 2,
            name: '长汀革命旧址',
            relation: '同属中央苏区核心区域',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBPV0yyz3zmI1YlA46VIT60Dxf1Ai8CTc8G3JJwoWTOTNeABBJ14BKibAE0smYm8rA8t_5sul2dB7zhecKHAw-fx4yfxRe2eBWfh8v3YxwH7ZCW2zY0aw8pXCeOXVnCdm-hjGzH_sc9pDVVydehieSpKPYql2fckmqI6qgC5Zkn_BYz6E5ZXcq8FdDFgKB16CNrVi-BkJ4CYXha9Y9ncUqB-u3hp0HgrXeD7Ii10zKNhFjM_6zSOx6no7k8VjkyIBNx9Zh1Mu-A3ZBH'
          },
          {
            id: 3,
            name: '建宁中央苏区反围剿纪念园',
            relation: '同期红军活动区域',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsrYaETH-qQgIIZytqg2Pz8ONx_Xv5qdlwlwl8M6rssfpWdrxy7CypLr5SbSdjBgO9bt7QPt8I8T0Sddma_X-xuFPcXC0T-cimXX-4_552ANamy5Dgh8gWZBoi7VATK-nZJg__91ioiWzu3I53cQmARulY9ZhvBJ-FS4gBIdIkyxaHudIyQaJ1rswkdtEsptaSAtb016OsoKNHQctov3guHTtYsyapvIGonEbLtcdbDwwb-p4PyTcYb8B0zgXG9xUB-bVjfQGTZHVI'
          }
        ],
        timeline: [
          { year: '1848年', event: '廖氏宗祠（古田会议会址）建成' },
          { year: '1929年6月', event: '红四军进驻古田' },
          { year: '1929年12月28-29日', event: '古田会议召开' },
          { year: '1961年', event: '被列为全国重点文物保护单位' },
          { year: '2014年', event: '全军政治工作会议在此召开' }
        ]
      },
      '2': {
        id: 2,
        name: '长汀革命旧址',
        city: '龙岩市',
        relatedPeople: [
          {
            name: '毛泽东',
            avatar: '👤',
            role: '苏维埃政府主席',
            description: '在长汀指导革命根据地经济建设工作'
          },
          {
            name: '周恩来',
            avatar: '👤',
            role: '中央局书记',
            description: '在长汀开展统一战线和经济工作'
          },
          {
            name: '朱德',
            avatar: '👤',
            role: '红军总司令',
            description: '多次在长汀指挥红军作战'
          }
        ],
        relatedEvents: [
          {
            date: '1932年',
            title: '长汀成为苏区经济中心',
            description: '长汀被誉为"红色小上海"，成为中央苏区的经济中心'
          },
          {
            date: '1933年',
            title: '福建省苏维埃政府成立',
            description: '福建省苏维埃政府在长汀成立，统一领导福建苏区工作'
          }
        ],
        relatedBuildings: [
          {
            id: 1,
            name: '古田会议会址',
            relation: '同属龙岩革命旧址群',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B'
          }
        ],
        timeline: [
          { year: '1929年', event: '红四军进占长汀' },
          { year: '1932年', event: '成为中央苏区经济中心' },
          { year: '1933年', event: '福建省苏维埃政府成立' },
          { year: '1934年', event: '红军长征后失守' },
          { year: '1988年', event: '被列为全国重点文物保护单位' }
        ]
      },
      '3': {
        id: 3,
        name: '建宁中央苏区反围剿纪念园',
        city: '三明市',
        relatedPeople: [
          {
            name: '毛泽东',
            avatar: '👤',
            role: '军事指挥',
            description: '指挥红军在建宁地区开展反"围剿"作战'
          },
          {
            name: '周恩来',
            avatar: '👤',
            role: '中革军委副主席',
            description: '参与指挥第四次反"围剿"作战'
          },
          {
            name: '朱德',
            avatar: '👤',
            role: '红军总司令',
            description: '在建宁指挥红军多次战役'
          }
        ],
        relatedEvents: [
          {
            date: '1931年5月',
            title: '建宁解放',
            description: '红军攻克建宁，建立苏维埃政权'
          },
          {
            date: '1933年',
            title: '第四次反围剿',
            description: '建宁成为第四次反"围剿"的重要战场'
          },
          {
            date: '1934年',
            title: '长征前夕',
            description: '红军在建宁进行最后的整编'
          }
        ],
        relatedBuildings: [
          {
            id: 1,
            name: '古田会议会址',
            relation: '同期革命活动区域',
            image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUN86WZzLtOoOT5rViYSu8vcCqbWLivJRlCvDTKR9SrMt9btxGPvwTwWb-zr36EPqnpaQHxWVldRx3XRPcB9Ix5d7_c8sZwYT_7-vvpFIueHQ0g6DfFWXEjaILRLvzpIGVTNbcLhH_6K370OgKXK9YI7pDY0yv-doSv1SCnyxirji_MdEkO-Zp1-N_Roi3kyFqlz00k0_yW8ByPVVMOD_cxTxn9WD-3S_1INAiSk8C2bGJz52AB5EWMc7jaD09z54Z0DQlRDUYRa6B'
          }
        ],
        timeline: [
          { year: '1931年5月', event: '建宁解放' },
          { year: '1931-1934年', event: '反"围剿"作战时期' },
          { year: '1934年10月', event: '红军长征离开建宁' },
          { year: '2011年', event: '反围剿纪念园建成' }
        ]
      }
    }

    const graph = knowledgeGraphs[id]
    if (graph) {
      // 计算节点总数
      const nodeCount = 1 + // 中心节点
        (graph.relatedPeople?.length || 0) +
        (graph.relatedEvents?.length || 0) +
        (graph.relatedBuildings?.length || 0)

      this.setData({
        building: graph,
        graphNodeCount: nodeCount
      })
    } else {
      wx.showToast({
        title: '知识图谱信息不存在',
        icon: 'none'
      })
    }
  },

  /**
   * 绘制知识图谱 (Obsidian风格)
   */
  drawKnowledgeGraph() {
    const ctx = wx.createCanvasContext('knowledgeGraph', this)
    const { canvasWidth, canvasHeight, building } = this.data

    // 清空画布
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // 画布中心点
    const centerX = canvasWidth / 2
    const centerY = canvasHeight / 2

    // 收集所有节点
    const nodes = []

    // 中心节点（当前建筑）
    nodes.push({
      type: 'center',
      label: building.name,
      x: centerX,
      y: centerY,
      radius: 30,
      color: '#D41111'
    })

    // 计算周边节点位置（圆形分布）
    let angle = 0
    const radius = 150 // 分布半径

    // 添加人物节点
    if (building.relatedPeople && building.relatedPeople.length > 0) {
      building.relatedPeople.forEach((person, index) => {
        angle = (Math.PI * 2 / this.data.graphNodeCount) * (index + 1)
        nodes.push({
          type: 'people',
          label: person.name,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          radius: 20,
          color: '#3B82F6'
        })
      })
    }

    // 添加事件节点
    if (building.relatedEvents && building.relatedEvents.length > 0) {
      const offset = (building.relatedPeople?.length || 0) + 1
      building.relatedEvents.forEach((event, index) => {
        angle = (Math.PI * 2 / this.data.graphNodeCount) * (offset + index)
        nodes.push({
          type: 'event',
          label: event.title,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          radius: 18,
          color: '#10B981'
        })
      })
    }

    // 添加关联建筑节点
    if (building.relatedBuildings && building.relatedBuildings.length > 0) {
      const offset = (building.relatedPeople?.length || 0) + (building.relatedEvents?.length || 0) + 1
      building.relatedBuildings.forEach((bld, index) => {
        angle = (Math.PI * 2 / this.data.graphNodeCount) * (offset + index)
        nodes.push({
          type: 'building',
          label: bld.name,
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          radius: 20,
          color: '#F59E0B'
        })
      })
    }

    // 1. 绘制连接线
    ctx.setLineCap('round')
    nodes.forEach((node, index) => {
      if (index === 0) return // 跳过中心节点

      // 绘制从中心到节点的线
      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(node.x, node.y)
      ctx.setStrokeStyle('rgba(183, 28, 28, 0.15)')
      ctx.setLineWidth(1.5)
      ctx.stroke()
    })

    // 2. 绘制节点
    nodes.forEach((node) => {
      // 绘制外圈光晕（中心节点特殊处理）
      if (node.type === 'center') {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.radius + 8, 0, Math.PI * 2)
        ctx.setFillStyle('rgba(183, 28, 28, 0.1)')
        ctx.fill()
      }

      // 绘制节点圆圈
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.setFillStyle(node.color)
      ctx.fill()

      // 绘制节点边框
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.setStrokeStyle('#FFFFFF')
      ctx.setLineWidth(2)
      ctx.stroke()

      // 绘制节点标签
      ctx.setFontSize(node.type === 'center' ? 14 : 11)
      ctx.setFillStyle('#1F1F1F')
      ctx.setTextAlign('center')
      ctx.setTextBaseline('top')

      // 文字换行处理
      const maxWidth = 60
      const text = node.label
      if (text.length > 6) {
        const line1 = text.substring(0, 6)
        const line2 = text.substring(6, 12)
        ctx.fillText(line1, node.x, node.y + node.radius + 8)
        if (line2) {
          ctx.fillText(line2, node.x, node.y + node.radius + 22)
        }
      } else {
        ctx.fillText(text, node.x, node.y + node.radius + 8)
      }
    })

    // 绘制到屏幕
    ctx.draw()
  },

  /**
   * 触摸开始
   */
  handleTouchStart(e) {
    // 预留交互功能
  },

  /**
   * 触摸移动
   */
  handleTouchMove(e) {
    // 预留拖动功能
  },

  /**
   * 触摸结束
   */
  handleTouchEnd(e) {
    // 预留点击节点功能
  },

  /**
   * 跳转到关联建筑详情页
   */
  goToBuilding(e) {
    const id = e.currentTarget.dataset.id
    wx.redirectTo({
      url: `/pages/detail/detail?id=${id}`
    })
  },

  /**
   * 返回上一页
   */
  goBack() {
    wx.navigateBack()
  }
})
