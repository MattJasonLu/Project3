// pages/card/card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'1',
    content: ''
  },
  // 信息
  info: function (e) {
    var that = this
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/getCard?id=' + that.data.id,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        that.setData({
          content: res.data.content,
        })
      }
    })
    wx.showModal({
      title: '卡信息',
      // content: '学号：20142344017 卡号：62280012404703198',
      content: that.data.content,
      showCancel: false,
      success: function (res) {
        // 赋值
        content: res.data.content
        if (res.confirm) {
          console.log('用户点击确定')
        }
      }
    })  
  },
  // 余额
  balance: function (e) {
    wx.showModal({
      title: '余额',
      content: '您的余额不足请充值！',
      confirmText: '充100',
      cancelText: '充50',
      success: function (res) {
        if (res.confirm) {
          wx.showToast({
            title: '充值成功666',
            icon: 'success',
            duration: 1000
          })  
        } else if (res.cancel) {
          wx.showToast({
            title: '这么抠',
            icon: 'loading',
            duration: 2000
          })
        } 
      }
    }) 
  }, 
  // 流水
  turnover: function (e) {
    wx.navigateTo({
      url: './turnover/turnover',
    })
  },
  lost: function(e) {
    wx.navigateTo({
      url: './lost/index',
    })
  },
  pay: function (e) {
    // 密钥 6e777ae76701232b06d6dd740d495595
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
        wx.showToast({
          title: '充值成功666',
          icon: 'success',
          duration: 1000
        }) 
      },
      'fail': function (res) {
        wx.showToast({
          title: '充值失败',
          icon: 'loading',
          duration: 1000
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