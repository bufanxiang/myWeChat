// pages/component/text/text.js
var initText = 'this is first line\nthis is second line';
var extraLine = [];
Page({
  data:{
    text: initText
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
  add:function(e){
    extraLine.push('other line');
    this.setData({
      text: initText + '\n' + extraLine.join('\n')
    })
  },
  remove:function(e){
    extraLine.pop();
    this.setData({
      text: initText + '\n' + extraLine.join('\n')
    })
  }
})