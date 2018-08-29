import { BASEURL } from './config'

const HTTP = (url, data, method) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASEURL + url,
      data: data,
      method: method,
      header: {
        'content-type': 'application/json'
      },
      success: (res) => {
        if (res.statusCode === 200 && res.data.Code === 0) {
          resolve(res.data.Data)
        } else {
          reject(res)
        }
      },
      fail: (res) => {
        reject(res)
      }
    })
  })
}

const POST = (url, data) => {
  return HTTP(url, data, 'POST')
}

const GET = (url, data) => {
  return HTTP(url, data, 'GET')
}

export {
  HTTP,
  POST,
  GET
}
