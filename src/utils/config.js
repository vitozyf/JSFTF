const ISPRODUCTION = process.env.NODE_ENV === 'production'

const BASEURL = ISPRODUCTION ? 'https://www.vitock.cn:6060/' : 'https://localhost:6060/'

export {
  BASEURL
}
