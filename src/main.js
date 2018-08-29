import Vue from 'vue'
import App from './App'
import '@/assets/styles/index.scss'
import {
  HTTP,
  POST,
  GET,
  showToast
} from '@/utils'
Vue.config.productionTip = false
App.mpType = 'app'

Vue.prototype.$http = HTTP
Vue.prototype.$post = POST
Vue.prototype.$get = GET
Vue.prototype.$showToast = showToast

const app = new Vue(App)
app.$mount()
