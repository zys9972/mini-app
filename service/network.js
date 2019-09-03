import {
  baseURL,
  timeout
} from './config.js'

//promise网络请求的封装
function request(options) {
  wx.showLoading({
    title: '数据加载中ing',
  })

  return new Promise((resolve, reject) => {
    wx.request({
      url: baseURL + options.url,
      timeout: timeout,
      data: options.data,
      success: function(res) {
        resolve(res.data)
      },
      fail: reject,
      complete: res => {
        wx.hideLoading()
      }
    })
  })
}

export default request;

