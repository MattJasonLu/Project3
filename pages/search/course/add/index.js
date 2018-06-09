// pages/search/course/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    teacher:'',
    time:''
  },
  // 设置关键字
  name: function (e) {
    var name1 = e.detail.value
    if (name1 != null) {
      this.setData({
        name: name1
      })
    }
  },
  // 设置关键字
  teacher: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        teacher: name
      })
    }
  },
  // 设置关键字
  time: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        time: name
      })
    }
  },
  add: function (e) {
    var that = this
    // 请求获取对应的教务公告
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/addCourse?name=' + that.data.name + '&teacher=' + that.data.teacher + '&time=' + that.data.time,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res)
        // 数据更新
        wx.showToast({
          title: '增加成功',
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