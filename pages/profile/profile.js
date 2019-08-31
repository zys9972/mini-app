// pages/profile/profile.js
Page({
  data: {
    orderList: [
      { icon: 'message.png', info: '我的消息' },
      { icon: 'pointer.png', info: '积分商城' },
      { icon: 'vip.png', info: '会员卡' },
    ],
    serviceList: [
      { icon: 'cart.png', info: '我的购物车' },
      { icon: 'app.png', info: '下载购物APP' },
    ]
  },
  onLoad: function (options) {

  },
  onShareAppMessage: function () {
    return {
      title: '跟我一起做女神吧',
      path: 'pages/home/home',
      imageUrl: 'http://ww1.sinaimg.cn/large/006qtd2Tgy1g4j9tfsqusj30u01sztet.jpg' // 图片 URL
    }
  }
})