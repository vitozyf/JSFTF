// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    activeTab: {
      tabIndex: 0
    }
  },
  mutations: {
    setActiveTab: (state, activeTab) => {
      state.activeTab.tabIndex = activeTab.tabIndex
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    }
  }
})

export default store
