// import {selectedFoods} from '../../data/selectedFood'

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectedFoods: []
  },
  toDetail: function (a) {
	  console.log(a.target.dataset.id)
	  let id = a.target.dataset.id;
	  let data = {}
	  for(i of this.selectedFoods) {
		  if (i.id == id) {
			  data = i
		  }
	  }
	  this.addProducrCart(id, data)
	  
  },
  
  // 获取推荐商品
  getSelectedFood () {
    wx.request({
      url: 'http://localhost:3000/api/index/selectedFood',
      success: res => {
        console.log(res)
        this.setData({
          selectedFoods: res.data.data.result
        })
      }
    })
  },
  
  // 商品添加购物车
  addProducrCart (id, data) {
	  wx.request({
		  url: "http://localhost:3000/api/mycart/add",
		  method: "POST",
		  data: data,
		  success: res => {
			  console.log(res)
		  }
	  })
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getSelectedFood()
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