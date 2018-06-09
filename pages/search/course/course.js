// pages/search/course/course.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dates: ['', '一', '二', '三', '四', '五', '六', '日'],
    times: ['1~2', '3~4', '5~6', '7~8', '9~10', '11~12'],
    course: "",
    isShow: true,
    text: '操作'
  },

  add: function(e) {
    wx.navigateTo({
      url: 'add/index',
    })
  },

  delete: function(e) {
    wx.navigateTo({
      url: 'delete/index',
    })
  },
  select: function (e) {
    wx.navigateTo({
      url: 'delete/index',
    })
  },

  update: function(e) {
    wx.navigateTo({
      url: 'update/index',
    })
  },

  editBut: function (e) {
    var that = this;

    that.setData({
      isShow: (!that.data.isShow),
      text: that.data.text == '操作' ? '完成' : '操作'
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    wx.request({
      // 获取后台数据
      url: 'https://www.dickbob.xyz/Weapp/listCourse',
      header: {
        'content-type': 'application/json' // 默认值
      },
      // 请求成功的回调
      success: function (res) {
        console.log(res.data)
        // 修改访问到的数据
        var array = new Array()
        res.data.forEach(function(item){
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