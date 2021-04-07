<template>
  <div class="image">
    {{ imageObject }}
  </div>
</template>

<script>
export default {
  name: 'Image',
  computed: {
    imageObject() {
      return this.$route.params.imageObject;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
