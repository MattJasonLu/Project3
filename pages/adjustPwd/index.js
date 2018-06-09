// pages/adjustPwd/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username:'',
    password:'',
    newPassword:'',
    cfmPassword:''
  },

  // 设置用户名
  oldPwdInput: function (e) {
    var temp = e.detail.value
    if (temp != null) {
      this.setData({
        password: temp
      })
    }
  },

  // 设置密码
  newPwdInput: function (e) {
    var temp = e.detail.value
    if (temp != null) {
      this.setData({
        newPassword: temp
      })
    }
  },

  cfmPwdInput: function (e) {
    var temp = e.detail.value
    if (temp != null) {
      this.setData({
        cfmPassword: temp
      })
    }
  },

  adjust: function(e) {
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/updateUser?account=' + this.data.username + '&password=' + this.data.password
      + '&newPassword=' + this.data.newPassword + '&cfmPassword=' + this.data.cfmPassword,
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        wx.showToast({
          title: '修改成功！',
          icon: 'success',
        })
      },
      fail: function (res) {
        wx.showToast({
          title: '输入错误！',
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