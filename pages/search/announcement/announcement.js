// pages/search/announcement/announcement.js
Page({
    
  /**
   * 页面的初始数据
   */
  data: {
    index: 0,
    range: ['全部','教务','学生','考试','考级'],
    announce:"",
    isShow: true,
    text: '编辑',
    keyword: "",
  },

  editBut: function(e) {
    var that = this;
    
    that.setData({
      isShow: (!that.data.isShow),
      text: that.data.text == '编辑' ? '完成' : '编辑'
    })

  },
  add: function(e) {
    wx.navigateTo({
      url: 'add/index',
    })
  },
  deleteAnnounce: function(e) {
    var id = e.currentTarget.dataset.text
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/deleteAnnouncement?id=' + id,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.showToast({
          title: '删除成功',
          duration: 2000,
        })
      }
    })
  },

  // 类别更换事件
  categoryChange: function(e) {
    console.log(this.data.range[e.detail.value]);
  },
  // 设置关键字
  searchText: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        keyword: name
      })
    }
  },
  // 查询按钮操作事件
  search: function(e) {
    var that = this
    console.log(that.data.keyword)
    // 请求获取对应的教务公告
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/getAnnouncement?keyword=' + that.data.keyword,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          announce: res.data
        })
        
      }
    })
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/listAnnouncement',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          announce:res.data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.showToast({
      title: '玩命加载中...',
      icon: 'loading',
      duration: 500
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})