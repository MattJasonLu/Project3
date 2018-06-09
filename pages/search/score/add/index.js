// pages/search/score/add/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    studentId: '',
    courseId: '',
    score: ''
  },
  // 设置关键字
  studentId: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        studentId: name
      })
    }
  },
  courseId: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        courseId: name
      })
    }
  },
  score: function (e) {
    var name = e.detail.value
    if (name != null) {
      this.setData({
        score: name
      })
    }
  },
  add: function (e) {
    var that = this
    // 请求获取对应的教务公告
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/addScore?studentId=' + that.data.studentId + '&courseId=' + that.data.courseId + '&score=' + that.data.score,
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