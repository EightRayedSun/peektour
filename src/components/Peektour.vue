<template>
  <div class="peektour">
    <!-- <router-link to="/">Home</router-link> -->
    <ul>
      <li v-for="album in albums" :key="album.name">
        <router-link :to="{ name: 'album', params: { id: album.name, album }}">{{album.name}}</router-link>
      </li>
    </ul>
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
