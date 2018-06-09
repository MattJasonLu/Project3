// pages/card/lost/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    lost: "",
    isShow: true,
    text: '编辑',
    id: '1'
  },

  editBut: function (e) {
    var that = this;

    that.setData({
      isShow: (!that.data.isShow),
      text: that.data.text == '编辑' ? '完成' : '编辑'
    })

  },
  loss: function(e) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/updateCard?id=' + that.data.id,
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.showToast({
          title: '挂失成功',
          duration: 2000
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '挂失失败',
          duration: 2000
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