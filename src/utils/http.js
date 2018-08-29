import {
  BASEURL
} from './config'
import {
  showToast,
  showLoading,
  hideLoading
} from './utils'

const HTTP = (url, data, method, title = '加载中...') => {
  return new Promise((resolve, reject) => {
    showLoading(title)
    wx.request({
      url: BASEURL + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode === 200) {
          if (res.data.Code === 0) {
            resolve(res.data.Data)
          } else {
            showToast(res.data.Message)
          }
        } else {
          showToast('服务器故障，请稍后重试')
          reject(res)
        }
      },
      fail: (res) => {
        reject(res)
      },
      complete: () => {
        hideLoading()
      }
    })
  })
}

const POST = (url, data, title) => {
  return HTTP(url, data, 'POST', title)
}

const GET = (url, data, title) => {
  return HTTP(url, data, 'GET', title)
}

export {
  HTTP,
  POST,
  GET
}
