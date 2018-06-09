// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username: '', // 用户名
    password: ''  // 密码
  },

  // 设置用户名
  usernameInput: function(e) {
    var name = e.detail.value
    console.log(name)
    if (name != null) {
      this.setData({
        username: name
      })
    }
  },

  // 设置密码
  passwordInput: function(e) {
    var word = e.detail.value
    console.log(word)
    if (word != null) {
      this.setData({
        password: word
      })
    }
  },

  // 登录请求服务器
  login: function (e) {
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/getUser?account=' + this.data.username + '&password=' + this.data.password,
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.showToast({
          title: '登录成功',
          duration: 1000,
        })
        wx.switchTab({
          url: '../index/index',
        })
      },
      fail: function(res) {
        wx.showToast({
          title: '输入错误！',
          icon: 'loading',
        })
      }
    })
  },

  register: function (e) {
    wx.navigateTo({
      url: '../register/register',
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