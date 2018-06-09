// pages/serve/serve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    exam: ""
  },
  calendar: function (e) {
    wx.navigateTo({
      url: './calendar/index/index',
    })
  },
  chase: function (e) {
    wx.navigateTo({
      url: './article/article',
    })
  },
  repair: function (e) {
    wx.navigateTo({
      url: './fix/fix',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/listExam',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          exam: res.data
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