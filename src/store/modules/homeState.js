import {
  ACTION_LOAD_LIST,
  DEL_ITEM,
  DEL_SELECTED_ITEM,
  GET_LIST,
  GET_SELECTED_LIST,
  SET_LIST,
  ADD_SELECTED_LIST, ADD_TO_LIST
} from '../types'
import { db } from '../../../db/dbApi'

const fnFilters = (item) => {
  return ({ id }) => {
    return item.id !== id
  }
}

const state = {
  list: [],
  selectedList: []
}

const actions = {
  [ACTION_LOAD_LIST]: async ({ commit }, _) => {
    try {
      const doc = await db.collection('list').doc('items').get()
      commit(SET_LIST, doc.data().cities)
    } catch (e) {
      console.error(e)
    }
  }
}

const mutations = {
  [SET_LIST]: (state, payload) => {
    state.list = payload
  },
  [ADD_TO_LIST]: (state, payload) => {
    state.list.push(payload)
  },
  [DEL_ITEM]: (state, payload) => {
    state.list = state.list.filter(fnFilters(payload))
  },
  [ADD_SELECTED_LIST]: (state, payload) => {
    state.selectedList.push(payload)
  },
  [DEL_SELECTED_ITEM]: (state, payload) => {
    state.selectedList = state.selectedList.filter(fnFilters(payload))
  }
}

const getters = {
  [GET_LIST]: state => state.list,
  [GET_SELECTED_LIST]: state => state.selectedList
}

export default {
  state,
  actions,
  mutations,
  getters
}
