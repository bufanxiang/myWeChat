// pages/component/swiper/swiper.js
Page({
  data:{
    background: ['green', 'red', 'yellow','blue'],
    indicatorDots: true,
    vertical: false,
    autoplay: true,
    interval: 3000,
    duration: 1200,
  },
  onLoad:function(){
      console.log('swiper页面加载')
  },
  onReady:function(){
      console.log('swiper页面初次渲染完成')
  },
  onShow:function(){
      console.log('swiper页面显示')
  },
  onHide:function(){
      console.log('swiper页面隐藏')
  },
  onUnload:function(){
      console.log('swiper页面卸载')
  },
  changeIndicatorDots:function(e){
      this.setData({
        indicatorDots: !this.data.indicatorDots
      })
    },
    changerVertical:function(e){
      this.setData({
        vertical: !this.data.vertical
      })
    },
    changeAutoplay:function(e){
      this.setData({
        autoplay: !this.data.autoplay
      })
    },
    intervalChange:function(e){
      this.setData({
        interval: e.detail.value
      })
    },
    durationChange:function(e){
      this.setData({
        duration: e.detail.value
      })
    }
})