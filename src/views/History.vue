<template>
  <div class="history">
    <div class="wrapper_history">
      <div class="history_list" v-for="(item, index) in historyList" :key="index">
        <div class="item_name">id:{{item.id}} name: {{item.name}}</div>
        <div class="item_action">{{item.action}}</div>
        <div class="item_date">
          {{item.date}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { GET_HISTORY_LIST } from '../store/types'

export default {
  name: 'History',
  computed: {
    historyList () {
      return this.$store.getters[GET_HISTORY_LIST](this.$route.params.type)
    }
  }
}
</script>
<style scoped lang="scss">
  .history {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    .wrapper_history{
      width: 60%;
      .history_list {
        display: flex;
        justify-content: space-between;
        border: solid 1px #000;
        padding: 1rem;
        .item_name {
          min-width: 30%;
          text-align: left;
        }
        .item_action {
          min-width: 20%;
          text-align: left;
        }
        .item_date {
          min-width: 50%;
          text-align: right;
        }
      }
    }
  }
</style>
