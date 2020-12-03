// pages/exam/exam.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'Ming',
    pendent:1,
    subject:[
      {id:0,title:'C++程序设计',time:'2020年10月22日',residue:'3'},
      {id:1,title:'C++程序设计',time:'2020年10月22日',residue:'3'},
      {id:2,title:'C++程序设计',time:'2020年10月22日',residue:'3'},
      {id:3,title:'C++程序设计',time:'2020年10月22日',residue:'3'},
      {id:4,title:'C++程序设计',time:'2020年10月22日',residue:'3'},
    ]

  },

  go_exam:function(e){
    console.log(e);
    var id=e.currentTarget.dataset.id;
    console.log(id)
    wx.navigateTo({
      url: '/pages/exam/exam?id='+id,
      
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