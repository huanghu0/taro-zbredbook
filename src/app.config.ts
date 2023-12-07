export default defineAppConfig({
  pages: [
    'pages/home/index',
    'pages/shop/index',
    'pages/message/index',
    'pages/mine/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar:{
    backgroundColor:'#FAFAFA',
    color:'#333333',
    selectedColor:'#FF2442',
    list:[
      {
        pagePath:'pages/home/index',
        text:'首页',
        iconPath:'assets/img/tabbar/home.png',
        selectedIconPath:'assets/img/tabbar/selecthome.png'
      },
      {
        pagePath:'pages/shop/index',
        text:'购物',
        iconPath:'assets/img/tabbar/shop.png',
        selectedIconPath:'assets/img/tabbar/selectshop.png'
      },
      {
        pagePath:'pages/message/index',
        text:'消息',
        iconPath:'assets/img/tabbar/message.png',
        selectedIconPath:'assets/img/tabbar/selectmessage.png'
      },
      {
        pagePath:'pages/mine/index',
        text:'我的',
        iconPath:'assets/img/tabbar/mine.png',
        selectedIconPath:'assets/img/tabbar/selectmine.png'
      }                 
    ]
  }
})
