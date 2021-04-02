<template>
  <div class="peektour">
    <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
  name: 'PeekTour',
  props: {
    albums: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
