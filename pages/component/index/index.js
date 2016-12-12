Page({
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
            pages: ['text', 'icon', 'progress']
        }
      ]
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
