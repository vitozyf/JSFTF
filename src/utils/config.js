const ISPRODUCTION = process.env.NODE_ENV === 'production'
// 'https://localhost:6060/'
const BASEURL = ISPRODUCTION ? 'https://www.vitock.cn:6060/' : 'https://www.vitock.cn:6060/'

export {
  BASEURL
}
