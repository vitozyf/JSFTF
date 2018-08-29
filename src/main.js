import Vue from 'vue'
import App from './App'
import '@/assets/styles/index.scss'
import {
  HTTP,
  POST,
  GET,
  showToast,
  showLoading,
  hideLoading
} from '@/utils'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$http = HTTP
Vue.prototype.$post = POST
Vue.prototype.$get = GET
Vue.prototype.$showToast = showToast
Vue.prototype.$showLoading = showLoading
Vue.prototype.$hideLoading = hideLoading

const app = new Vue(App)
app.$mount()
