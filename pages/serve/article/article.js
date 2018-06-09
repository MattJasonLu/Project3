// pages/serve/article/article.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issue: "",
    isShow: true,
    text: '编辑',
    keyword: ''
  },
  // 设置关键字
  keyword: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        keyword: name
      })
    }
  },
  // 删除功能
  delete: function (e) {
    var id = e.currentTarget.dataset.text
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/deleteLost?id=' + id,
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
  add: function(e) {
    wx.navigateTo({
      url: 'add/index',
    })
  },

  editBut: function (e) {
    var that = this;

    that.setData({
      isShow: (!that.data.isShow),
      text: that.data.text == '编辑' ? '完成' : '编辑'
    })

  },

  search: function(e) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/getLost?keyword=' + that.data.keyword,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          issue: res.data
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
      url: 'https://www.dickbob.xyz/Weapp/listLost',
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        that.setData({
          issue: res.data
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