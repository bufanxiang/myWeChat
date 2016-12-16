Page({
    data:{
      list:[
        {
          id: 'view',
          name: '视图容器',
          open: false,
          pages: ['view', 'scroll-view', 'swiper']
        },
        {
            id: 'content',
            name: '基础内容',
            open: false,
            pages: ['icon', 'text', 'progress']
        },
        {
        	id: 'form',
        	name: '表单组件',
        	open: false,
        	pages: ['button', 'checbox', 'form', 'input', 'label', 'picker', 'radio', 'slide', 'switch', 'textarea']
        }
      ]
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
    onPullDownRefresh:function(){
      console.log('index下拉刷新');
      wx.stopPullDownRefresh();
      this.stopPullDownRefresh();
    },
    stopPullDownRefresh:function(){
      console.log('index停止下拉刷新')
    },
    onReachBottom:function(){
      console.log('index页面被上拉了')
    },
    widgetsToggle:function(e){
      var id = e.currentTarget.id;
      var list = this.data.list;
      for(var i = 0, len = list.length; i < len; i++){
          if(list[i].id == id){
              list[i].open = !list[i].open;
          }else{
              list[i].open = false;
          }
      }
      this.setData({
          list: list
      })
    }
})
