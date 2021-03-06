// pages/component/icon/icon.js
Page({
  data:{
    iconSize: [20, 30, 40, 50, 60, 70],
    iconColor: ['red', 'orange', 'yellow', 'green', 'rgb(0,255,255)', 'blue', 'purple'],
    iconType: ['success', 'info', 'warn', 'waiting', 'safe_success', 'safe_warn', 'success_circle', 'success_no_circle', 'waiting_circle', 'circle', 'download', 'info_circle', 'cancel', 'search', 'clear']
  },
  onLoad:function(){
        console.log('icon页面加载')
    },
    onReady:function(){
        console.log('icon页面初次渲染完成')
    },
    onShow:function(){
        console.log('icon页面显示')
    },
    onHide:function(){
        console.log('icon页面隐藏')
    },
    onUnload:function(){
        console.log('icon页面卸载')
    }
})