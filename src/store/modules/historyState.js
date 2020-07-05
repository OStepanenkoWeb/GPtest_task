import {
  GET_HISTORY_LIST,
  SET_HISTORY_LIST
} from '../types'
import { ALL } from '@/constants/typeActionHystory'

const state = {
  historyList: []
}

const actions = {}

const mutations = {
  [SET_HISTORY_LIST]: (state, payload) => {
    state.historyList.push(payload)
  }
}

const getters = {
  [GET_HISTORY_LIST]: state => type => state.historyList.filter(item => type === ALL || item.action === type)
}

export default {
  state,
  actions,
  mutations,
  getters
}
