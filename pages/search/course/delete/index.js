// pages/search/course/delete/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    course:''
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

  select: function(e) {
    var that = this;
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/getCourse?name=' + that.data.name,
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        // 修改访问到的数据
        var array = new Array()
        res.data.forEach(function (item) {
          var dataList = item.time.toString().split('-')
          var date = dataList[0]
          var time = dataList[1]
          var name = item.name
          var teacher = item.teacher
          array.push([name, teacher, date, time])
        })
        array.push(-1)
        // 测试打印
        console.log(array)
        // 数据更新
        that.setData({
          course: array
        })
      }
    })
  },
  // 删除功能
  delete: function (e) {
    var id = e.currentTarget.dataset.text
    wx.request({
      url: 'https://www.dickbob.xyz/Weapp/deleteCourse?id=' + id,
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