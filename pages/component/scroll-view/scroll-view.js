// pages/component/scroll-scroll-view/scroll-scroll-view.js
var order = ['green', 'red', 'yellow', 'blue', 'green']
Page({
  data: {
    toView: 'green',
    scrollTop: 100,
  },
  onLoad:function(){
      console.log('scroll-view页面加载')
  },
  onReady:function(){
      console.log('scroll-view页面初次渲染完成')
  },
  onShow:function(){
      console.log('scroll-view页面显示')
  },
  onHide:function(){
      console.log('scroll-view页面隐藏')
  },
  onUnload:function(){
      console.log('scroll-view页面卸载')
  },
  upper: function(e) {
    console.log(e)
  },
  lower: function(e) {
    console.log(e)
  },
  scroll: function(e) {
    console.log(e)
  },
  tap:function(e){
    for(var i =0; i<order.length; ++i){
      if(order[i] === this.data.toView){
        this.setData({
          toView: order[i+1]
        });
        break;
      }
    }
  },
  tapMove:function(e){
    this.setData({
      scrollTop: this.data.scrollTop + 10 
    })
  },
})