<template>
    <div class="buttons_wrapper">
      <div class="button" @click="() => historyHandler(ALL)">All history</div>
      <div class="button" @click="() => historyHandler(ADD)">Added to history</div>
      <div class="button" @click="() => historyHandler(DEL)">Delete history</div>
    </div>
</template>

<script>
import { ADD, ALL, DEL } from '../constants/typeActionHystory'

export default {
  name: 'ButtonsComponent',
  data: () => ({
    ALL: ALL,
    ADD: ADD,
    DEL: DEL
  }),
  methods: {
    historyHandler (type) {
      this.$router.push({ name: 'History', params: { type } })
    }
  }
}
</script>

<style scoped lang="scss">
  .buttons_wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    .button {
      border: 1px solid #2c3e50;
      border-radius: 5px;
      padding: 0.5rem;
      margin-right: 2rem;
      cursor: pointer;
      &:hover {
        background-color: bisque;
      }
    }
  }
</style>
