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
    canvasHeight: 0,
    // 拖动相关
    nodes: [],
    isDragging: false,
    dragNodeIndex: -1,
    lastTouchX: 0,
    lastTouchY: 0,
    lastDrawTime: 0 // 上次绘制时间（用于节流）
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
    // 初始化Canvas 2D
    this.initCanvas2D()
  },

  /**
   * 初始化Canvas 2D (新版API)
   */
  initCanvas2D() {
    const query = wx.createSelectorQuery().in(this)
    query.select('#knowledgeGraph')
      .fields({ node: true, size: true })
      .exec((res) => {
        if (!res || !res[0]) {
          console.error('Canvas节点获取失败')
          return
        }

        const canvas = res[0].node
        const ctx = canvas.getContext('2d')

        // 获取设备像素比，实现高清显示
        const dpr = wx.getWindowInfo().pixelRatio
        const width = res[0].width
        const height = res[0].height

        // 设置canvas尺寸（考虑设备像素比）
        canvas.width = width * dpr
        canvas.height = height * dpr
        ctx.scale(dpr, dpr)

        // 保存canvas和context
        this.canvas = canvas
        this.ctx = ctx
        this.canvasWidth = width
        this.canvasHeight = height

        this.setData({
          canvasWidth: width,
          canvasHeight: height
        })

        // 绘制知识图谱
        setTimeout(() => {
          this.drawKnowledgeGraph()
        }, 100)
      })
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
   * 绘制知识图谱 (Obsidian风格 + 可拖动)
   */
  drawKnowledgeGraph() {
    // 使用Canvas 2D新API
    if (!this.ctx) {
      console.error('Canvas context未初始化')
      return
    }

    const ctx = this.ctx
    const { canvasWidth, canvasHeight, building } = this.data

    // 清空画布
    ctx.clearRect(0, 0, canvasWidth, canvasHeight)

    // 画布中心点
    const centerX = canvasWidth / 2
    const centerY = canvasHeight / 2

    // 如果节点已存在（拖动中），使用现有位置
    let nodes = this.data.nodes
    if (nodes.length === 0) {
      // 初始化节点位置
      nodes = []

      // 中心节点（当前建筑）
      nodes.push({
        type: 'center',
        typeLabel: '建筑',
        label: building.name,
        x: centerX,
        y: centerY,
        radius: 35,
        color: '#D41111',
        icon: '🏛'
      })

      // 计算周边节点位置（圆形分布）
      let angle = 0
      const radius = 150 // 分布半径（减小以避免溢出）

      // 添加人物节点
      if (building.relatedPeople && building.relatedPeople.length > 0) {
        building.relatedPeople.forEach((person, index) => {
          angle = (Math.PI * 2 / this.data.graphNodeCount) * (index + 1)
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          // 边界约束（考虑节点半径和文字标签高度）
          const nodeRadius = 25
          const textHeight = 50 // 文字标签需要的额外空间
          const safeX = Math.max(nodeRadius + 10, Math.min(canvasWidth - nodeRadius - 10, x))
          const safeY = Math.max(nodeRadius + 20, Math.min(canvasHeight - textHeight, y))

          nodes.push({
            type: 'people',
            typeLabel: '人物',
            label: person.name,
            role: person.role,
            x: safeX,
            y: safeY,
            radius: nodeRadius,
            color: '#3B82F6',
            icon: '👤'
          })
        })
      }

      // 添加事件节点
      if (building.relatedEvents && building.relatedEvents.length > 0) {
        const offset = (building.relatedPeople?.length || 0) + 1
        building.relatedEvents.forEach((event, index) => {
          angle = (Math.PI * 2 / this.data.graphNodeCount) * (offset + index)
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          // 边界约束（考虑节点半径和文字标签高度）
          const nodeRadius = 25
          const textHeight = 50
          const safeX = Math.max(nodeRadius + 10, Math.min(canvasWidth - nodeRadius - 10, x))
          const safeY = Math.max(nodeRadius + 20, Math.min(canvasHeight - textHeight, y))

          nodes.push({
            type: 'event',
            typeLabel: '事件',
            label: event.title,
            date: event.date,
            x: safeX,
            y: safeY,
            radius: nodeRadius,
            color: '#10B981',
            icon: '📅'
          })
        })
      }

      // 添加关联建筑节点
      if (building.relatedBuildings && building.relatedBuildings.length > 0) {
        const offset = (building.relatedPeople?.length || 0) + (building.relatedEvents?.length || 0) + 1
        building.relatedBuildings.forEach((bld, index) => {
          angle = (Math.PI * 2 / this.data.graphNodeCount) * (offset + index)
          const x = centerX + Math.cos(angle) * radius
          const y = centerY + Math.sin(angle) * radius

          // 边界约束（考虑节点半径和文字标签高度）
          const nodeRadius = 25
          const textHeight = 50
          const safeX = Math.max(nodeRadius + 10, Math.min(canvasWidth - nodeRadius - 10, x))
          const safeY = Math.max(nodeRadius + 20, Math.min(canvasHeight - textHeight, y))

          nodes.push({
            type: 'building',
            typeLabel: '建筑',
            label: bld.name,
            relation: bld.relation,
            x: safeX,
            y: safeY,
            radius: nodeRadius,
            color: '#F59E0B',
            icon: '🏛'
          })
        })
      }

      // 保存节点数据
      this.setData({ nodes })
    }

    // 1. 绘制连接线
    ctx.lineCap = 'round'
    nodes.forEach((node, index) => {
      if (index === 0) return // 跳过中心节点

      // 绘制从中心到节点的线
      ctx.beginPath()
      ctx.moveTo(nodes[0].x, nodes[0].y)
      ctx.lineTo(node.x, node.y)
      ctx.strokeStyle = 'rgba(183, 28, 28, 0.2)'
      ctx.lineWidth = 2
      ctx.stroke()
    })

    // 2. 绘制节点
    nodes.forEach((node) => {
      // 绘制外圈光晕（使用rgba格式）
      let glowColor
      if (node.color === '#D41111') {
        glowColor = 'rgba(212, 17, 17, 0.125)'
      } else if (node.color === '#3B82F6') {
        glowColor = 'rgba(59, 130, 246, 0.125)'
      } else if (node.color === '#10B981') {
        glowColor = 'rgba(16, 185, 129, 0.125)'
      } else if (node.color === '#F59E0B') {
        glowColor = 'rgba(245, 158, 11, 0.125)'
      }

      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius + 6, 0, Math.PI * 2)
      ctx.fillStyle = glowColor
      ctx.fill()

      // 绘制节点圆圈
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()

      // 绘制节点边框
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.strokeStyle = '#FFFFFF'
      ctx.lineWidth = 3
      ctx.stroke()

      // 绘制图标（中心位置）
      ctx.font = `${node.type === 'center' ? 20 : 16}px sans-serif`
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'middle'
      ctx.fillText(node.icon, node.x, node.y)

      // 绘制类型标签（节点上方）
      ctx.font = '10px sans-serif'
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'bottom'
      ctx.fillText(node.typeLabel, node.x, node.y - node.radius - 8)

      // 绘制节点名称（节点下方）
      ctx.font = `${node.type === 'center' ? 13 : 11}px sans-serif`
      ctx.fillStyle = '#FFFFFF'
      ctx.textAlign = 'center'
      ctx.textBaseline = 'top'

      // 文字换行处理
      const text = node.label
      if (text.length > 7) {
        const line1 = text.substring(0, 7)
        const line2 = text.substring(7, 14)
        ctx.fillText(line1, node.x, node.y + node.radius + 10)
        if (line2) {
          ctx.fillText(line2, node.x, node.y + node.radius + 24)
        }
      } else {
        ctx.fillText(text, node.x, node.y + node.radius + 10)
      }

      // 绘制额外信息（角色/日期/关系）
      if (node.role || node.date || node.relation) {
        ctx.font = '9px sans-serif'
        ctx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        ctx.textAlign = 'center'
        const extraText = node.role || node.date || node.relation
        if (text.length > 7) {
          ctx.fillText(extraText, node.x, node.y + node.radius + 38)
        } else {
          ctx.fillText(extraText, node.x, node.y + node.radius + 24)
        }
      }
    })

    // Canvas 2D新API：绘制是同步的，无需调用draw()
  },

  /**
   * 触摸开始
   */
  handleTouchStart(e) {
    const touch = e.touches[0]
    const x = touch.x
    const y = touch.y

    // 检查是否点击在某个节点上
    const nodes = this.data.nodes
    let dragNodeIndex = -1

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      const distance = Math.sqrt(Math.pow(x - node.x, 2) + Math.pow(y - node.y, 2))
      if (distance <= node.radius) {
        dragNodeIndex = i
        break
      }
    }

    this.setData({
      isDragging: dragNodeIndex >= 0,
      dragNodeIndex,
      lastTouchX: x,
      lastTouchY: y
    })
  },

  /**
   * 触摸移动（极限性能优化）
   */
  handleTouchMove(e) {
    if (!this.data.isDragging || this.data.dragNodeIndex < 0) return

    const touch = e.touches[0]
    const x = touch.x
    const y = touch.y

    // 计算移动距离
    const deltaX = x - this.data.lastTouchX
    const deltaY = y - this.data.lastTouchY

    // 直接更新内存中的节点位置（不调用setData）
    const nodes = this.data.nodes
    const nodeIndex = this.data.dragNodeIndex
    nodes[nodeIndex].x += deltaX
    nodes[nodeIndex].y += deltaY

    // 边界限制（考虑文字标签高度）
    const node = nodes[nodeIndex]
    const marginX = node.radius + 10
    const marginTop = node.radius + 20  // 上方留出类型标签空间
    const marginBottom = 50             // 下方留出名称和额外信息空间

    node.x = Math.max(marginX, Math.min(this.canvasWidth - marginX, node.x))
    node.y = Math.max(marginTop, Math.min(this.canvasHeight - marginBottom, node.y))

    // 更新触摸位置（不调用setData）
    this.data.lastTouchX = x
    this.data.lastTouchY = y

    // 取消之前的动画帧
    if (this.rafId) {
      this.canvas.cancelAnimationFrame(this.rafId)
    }

    // 使用requestAnimationFrame确保在最佳时机绘制
    this.rafId = this.canvas.requestAnimationFrame(() => {
      this.drawKnowledgeGraphFast()
      this.rafId = null
    })
  },

  /**
   * 触摸结束
   */
  handleTouchEnd(e) {
    if (this.data.isDragging) {
      // 拖动结束，更新数据并重新绘制完整版本
      this.setData({
        nodes: this.data.nodes,
        isDragging: false,
        dragNodeIndex: -1
      }, () => {
        this.drawKnowledgeGraph()
      })
    } else {
      this.setData({
        isDragging: false,
        dragNodeIndex: -1
      })
    }
  },

  /**
   * 快速绘制模式（拖动时使用，超极简版本）
   */
  drawKnowledgeGraphFast() {
    if (!this.ctx) return

    const ctx = this.ctx
    const nodes = this.data.nodes
    const dragNodeIndex = this.data.dragNodeIndex

    // 清空画布
    ctx.fillStyle = '#0D0D0D'
    ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight)

    // 1. 极简连接线 - 只绘制被拖动节点的连接线
    ctx.beginPath()
    ctx.strokeStyle = 'rgba(183, 28, 28, 0.15)'
    ctx.lineWidth = 1
    if (dragNodeIndex === 0) {
      // 中心节点被拖动
      for (let i = 1; i < nodes.length; i++) {
        ctx.moveTo(nodes[0].x, nodes[0].y)
        ctx.lineTo(nodes[i].x, nodes[i].y)
      }
    } else {
      // 其他节点被拖动 - 只画所有连接线
      for (let i = 1; i < nodes.length; i++) {
        ctx.moveTo(nodes[0].x, nodes[0].y)
        ctx.lineTo(nodes[i].x, nodes[i].y)
      }
    }
    ctx.stroke()

    // 2. 极简节点 - 批量绘制，最少API调用
    ctx.lineWidth = 2
    ctx.strokeStyle = '#FFFFFF'

    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]

      // 填充和描边一起
      ctx.beginPath()
      ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2)
      ctx.fillStyle = node.color
      ctx.fill()
      ctx.stroke()
    }

    // 3. 图标 - 最后统一绘制文字
    ctx.fillStyle = '#FFFFFF'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i]
      ctx.font = `${node.type === 'center' ? 20 : 16}px sans-serif`
      ctx.fillText(node.icon, node.x, node.y)
    }

    // Canvas 2D新API：同步绘制，无需draw()
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
