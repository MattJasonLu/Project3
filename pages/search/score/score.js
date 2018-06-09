// pages/search/score/score.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    score: "",
    isShow: true,
    text: '操作',
    keyword: ''
  },

  editBut: function (e) {
    var that = this;
    that.setData({
      isShow: (!that.data.isShow),
      text: that.data.text == '操作' ? '完成' : '操作'
    })
  },
  // 设置关键字
  keyword: function (e) {
    var name = e.detail.value
    console.log(name)
    if (name != null) {
      this.setData({
        keyword: name
      })
    }
  },
  add: function(e) {
    wx.navigateTo({
      url: 'add/index',
    })
  },
  update: function (e) {
    wx.navigateTo({
      url: 'update/index',
    })
  }, 
  delete: function (e) {
    wx.navigateTo({
      url: 'delete/index',
    })
  },
  search: function(e) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/getScore?keyword=' + that.data.keyword,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          score: res.data
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
      url: 'https://www.dickbob.xyz/Weapp/listScore',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          score: res.data
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