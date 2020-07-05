<template>
  <div class="home">
    <ButtonsComponent/>
    <div class="wrapper_home">
      <CommonListComponent :list="list" @addItem="addItem"/>
      <SelectedListComponent :selected-list="selectedList" @delItem="delItem"/>
    </div>
  </div>
</template>

<script>
import {
  ACTION_LOAD_LIST,
  DEL_ITEM,
  DEL_SELECTED_ITEM,
  GET_LIST,
  GET_SELECTED_LIST,
  ADD_SELECTED_LIST, ADD_TO_LIST, SET_HISTORY_LIST
} from '../store/types'
import CommonListComponent from '@/components/CommonListComponent'
import ButtonsComponent from '@/components/ButtonsComponent'
import SelectedListComponent from '@/components/SelectedListComponent'
import { ADD, DEL } from '@/constants/typeActionHystory'

export default {
  name: 'Home',
  components: {
    SelectedListComponent,
    ButtonsComponent,
    CommonListComponent
  },
  mounted () {
    if (!this.$store.getters[GET_LIST].length) {
      this.$store.dispatch(ACTION_LOAD_LIST)
    }
  },
  computed: {
    list () {
      return this.$store.getters[GET_LIST]
    },
    selectedList () {
      return this.$store.getters[GET_SELECTED_LIST]
    }
  },
  methods: {
    delItem (item) {
      this.$store.commit(ADD_TO_LIST, item)
      this.$store.commit(DEL_SELECTED_ITEM, item)
      this.addToHistory(item, DEL)
    },
    addItem (item) {
      this.$store.commit(ADD_SELECTED_LIST, item)
      this.$store.commit(DEL_ITEM, item)
      this.addToHistory(item, ADD)
    },
    addToHistory (item, type) {
      item.action = type
      item.date = new Date().toString()
      this.$store.commit(SET_HISTORY_LIST, { ...item })
    }
  }
}
</script>

<style scoped lang="scss">
  .home {
    height: 100%;
    width: 100%;
    .wrapper_home {
      width: 100%;
      display: flex;
      justify-content: center;
      padding-top: 2rem;
    }
  }
</style>
