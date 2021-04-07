<template>
  <div class="album">
    <!-- {{album}} -->
    <ul>
      <li v-for="image in images" :key="image.name">
        <router-link :to="{ name: 'image', params: { imageId: image.name, imageObject: image }}"><img :src="image.url" /></router-link> 
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Album',
  computed: {
    album() {
      return this.$route.params.album
    },
    images() {
      return this.album.images;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
