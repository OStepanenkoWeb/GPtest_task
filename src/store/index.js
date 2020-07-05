import Vue from 'vue'
import Vuex from 'vuex'
import homeState from './modules/homeState'
import historyState from './modules/historyState'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    homeState,
    historyState
  }
})
