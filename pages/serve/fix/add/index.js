// pages/serve/article/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'',
    place:''
  },
  // 设置关键字
  content: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        content: name
      })
    }
  },
  // 设置关键字
  place: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        place: name
      })
    }
  },
  add: function (e) {
    var that = this
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/addFix?content=' + that.data.content,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.showToast({
          title: '增加成功',
          duration: 2000,
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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