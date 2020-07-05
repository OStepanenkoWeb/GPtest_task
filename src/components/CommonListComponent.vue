<template>
  <div class="wrapper_list">
    <SearchComponent @search="searchHandler"/>
    <div
      class="item_list"
      v-for="item in convertedList"
      :key="item.id">
      <div class="data_item">
        <div class="city">
          city: <div class="city_name"> {{item.name}}</div>
        </div>
        <div class="counter">
          country: <div class="counter_name" v-for="country in item.items" :key="country.id">
          {{country.name}}
        </div>
        </div>
      </div>
      <div class="button_item" @click="() => addHandler(item)">[+]</div>
    </div>
  </div>
</template>

<script>
import SearchComponent from './SearchComponent'

export default {
  name: 'CommonListComponent',
  components: {
    SearchComponent
  },
  props: {
    list: {
      type: Array,
      default: () => ([])
    }
  },
  data: () => ({
    searchText: ''
  }),
  computed: {
    convertedList () {
      return this.filterList(this.list)
    }
  },
  methods: {
    sortedFn (a, b) {
      return b.count - a.count
    },
    preFiltered ({ name, items }) {
      return this.inIncluded(name) || items.filter(({ name }) => this.inIncluded(name)).length > 0
    },
    counterIncluded (item) {
      const countParent = this.calcOccurrence(item.name, this.searchText)
      const countChildren = item.items.reduce((acc, itc) => {
        acc = acc + this.calcOccurrence(itc.name, this.searchText)
        return acc
      }, 0)
      item.count = countParent || countChildren // По условию задачи или `name` или в `items.name`
      return item
    },
    inIncluded (str) {
      return str.toLowerCase().indexOf(this.searchText) > -1
    },
    addHandler (item) {
      this.$emit('addItem', item)
    },
    searchHandler (text) {
      this.searchText = text
    },
    filterList (list) {
      if (this.searchText) {
        return list
          .filter(this.preFiltered)
          .map(this.counterIncluded)
          .sort(this.sortedFn)
      }
      return list
    },
    calcOccurrence (str, subStr) {
      let count = 0
      let findStr = 0
      const subLen = subStr.length

      while (findStr + subLen < str.length) {
        const ind = str.indexOf(subStr, findStr)
        if (ind > -1) {
          findStr = ind + subLen
          count++
        } else {
          break
        }
      }
      return count
    }
  }
}
</script>

<style scoped lang="scss">
  .wrapper_list {
    width: 40%;
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
