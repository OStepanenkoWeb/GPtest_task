<template>
  <div class="wrapper_list">
    <div
      class="item_list"
      v-for="item in selectedList"
      :key="item.id">
      <div class="data_item">
        <div class="city">
          city: <div class="city_name"> {{item.name}}</div>
        </div>
        <div class="counter">
          counter: <div class="counter_name" v-for="count in item.items" :key="count.id">
          {{count.name}}
        </div>
        </div>
      </div>
      <div class="button_item" @click="() => delHandler(item)">[-]</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SelectedListComponent',
  props: {
    selectedList: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    delHandler (item) {
      this.$emit('delItem', item)
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper_list {
    width: 40%;
    padding-top: 6.4rem;
    .item_list {
      display: flex;
      justify-content: space-between;
      border: solid 1px gray;
      padding: 1rem;
      margin-right: 0.5rem;
      max-height: 36px;
      .data_item {
        display: flex;
        .city {
          display: flex;
          margin-right: 2rem;
          .city_name {
            font-weight: bold;
          }
        }
        .counter {
          display: flex;
          .counter-name {
          }
        }
      }
      .button_item {
        cursor: pointer;
      }
      &:hover {
        background-color: bisque;
      }
    }
  }
</style>
