<template>
  <div class="album">
    {{album}}
  </div>
</template>

<script>
export default {
  name: 'Album',
  computed: {
    album() {
      return this.$route.params.album
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
