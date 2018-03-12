// pages/test/test.js
var util = require('../../utils/util.js');
var order = ['green', 'red', 'yellow', 'blue', 'orange'];
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:3000,
    duration:1000,
    imgUrls:[
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    ObjArr: [
      { id: 0, unique: 'unique_0' },
      { id: 1, unique: 'unique_1' },
      { id: 2, unique: 'unique_2' },
      { id: 3, unique: 'unique_3' },
      { id: 4, unique: 'unique_4' },
      { id: 5, unique: 'unique_5' }
    ],
    numberArr: [1, 2, 3, 4],
    item: {
      index: 0,
      msg: 'it is a template',
      time: '2016-09-15'
    },
    myTime: '2016-09-15',
    toView: 'Red',
    scrollTop: 100
  },

  //swiper相关事件
  changeIndicatorDots:function(e){
    this.setData({
      indicatorDots:!this.data.indicatorDots
    })
  },
  changeAutoplay:function(e){
    this.setData({
      autoplay:!this.data.autoplay
    })
  },
  intervalChange:function(e){
    console.log(e.detail);
    this.setData({
      interval:e.detail.value
    })
  },
  durationChange:function(e){
    this.setData({
      duration: e.detail.value
    })
  },

  //scroll-view相关事件
  upper: function (e) { console.log(e); },
  lower: function (e) { console.log(e); },
  scroll: function (e) { console.log(e); },
  tap: function (e) {
    for (var i = 0; i < order.lenght; ++i) {
      if (order[i] === this.data.toView) {
        this.setData({
          toView: order[i + 1]
        })
        break
      }
    }
  },
  tapMove: function (e) {
    this.setData({
      scrollTop: this.data.scrollTop + 10
    })
  },

  //组件间事件传递
  onMyEvent: function (e) {
    console.log(e);
    e.detail
    console.log(e.detail); // 自定义组件触发事件时提供的detail对象
  },

  //点击事件switch
  switch: function () {
    const length = this.data.ObjArr.length;
    for (let i = 0; i < length; ++i) {
      const x = Math.floor(Math.random() * length);
      const y = Math.floor(Math.random() * length);
      const temp = this.data.ObjArr[x];
      this.data.ObjArr[x] = this.data.ObjArr[y];
      this.data.ObjArr[y] = temp;
    }
    this.setData({
      ObjArr: this.data.ObjArr
    })
  },
  //点击事件addToFront
  addToFront: function () {
    const length = this.data.ObjArr.length;
    this.data.ObjArr = [{ id: length, unique: 'unique_' + length }].concat(this.data.ObjArr);
    this.setData({
      ObjArr: this.data.ObjArr
    })
  },
  //点击事件addNumberToFront
  addNumberToFront: function () {
    const length = this.data.numberArr.length;
    this.data.numberArr = [length + 1].concat(this.data.numberArr);
    this.setData({
      numberArr: this.data.numberArr
    })
    // console.log(this.data.numberArr);
  },
  //点击事件test
  tapName: function (e) {
    // console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var now = new Date();
    var time = util.formatTime(now);
    this.setData({
      myTime: time
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