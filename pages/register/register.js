// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    cfmPassword:'',
    mobile:''
  },
  // 设置用户名
  usernameInput: function(e) {
    this.setData({
      username: e.detail.value,
    })
  },
  // 设置密码
  passwordInput: function(e) {
    this.setData({
      password: e.detail.value,
    })
  },
  // 确认密码
  cfmPasswordInput: function(e) {
    this.setData({
      cfmPassword: e.detail.value,
    })
  },
  // 手机号码
  mobileInput: function(e) {
    this.setData({
      mobile: e.detail.value,
    })
  },

  register: function(e) {
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Register?username=' + this.data.username + '&password=' + this.data.password +
        '&cfmPassword=' + this.data.cfmPassword + '&mobile=' + this.data.mobile,
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.navigateTo({
          url: '/pages/index/index',
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '检查密码是否一致！',
          icon: 'loading',
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