// pages/component/button/button.js
var type = ['default', 'primary', 'warn']
Page({
  data:{
	  defaultSize: 'default',
	  primarySize： 'default',
	  warnSize: 'deault',
	  disabled: false,
	  plain: false,
	  loading: false
  },
  onLoad:function(){
      console.log('index页面加载')
  },
  onReady:function(){
      console.log('index页面初次渲染完成')
  },
  onShow:function(){
      console.log('index页面显示')
  },
  onHide:function(){
      console.log('index页面隐藏')
  },
  onUnload:function(){
      console.log('index页面卸载')
  },
  setDisabled:function(e){
	  this.setData({
		  disabled: !this.data.disabled
	  })
  },
  setPlain:function(e){
	  this.setData({
		  plain: !this.data.plain
	  })
  },
  setLoading:function(e){
	  this.setData({
		  loading: !this.data.loading
	  })
  }
})