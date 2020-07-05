<template>
  <div class="search_wrapper">
    <input type="text" @input="inputHandler" class="search_input"/>
  </div>
</template>

<script>
export default {
  name: 'SearchComponent',
  data: () => ({
    textSearch: ''
  }),
  methods: {
    inputHandler (event) {
      this.$emit('search', event.target.value.trim().toLowerCase())
    }
  }
}
</script>

<style scoped lang="scss">
  .search_wrapper {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 2rem 0;
    .search_input {
      width: 100%;
      height: 2rem;
      margin-right: 0.5rem;
    }
  }
</style>
