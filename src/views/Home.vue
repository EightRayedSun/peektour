<template>
  <div class="home">
    <peek-tour :albums="albums"/>
  </div>
</template>

<script>
// @ is an alias to /src
import PeekTour from '@/components/Peektour.vue';

export default {
  name: 'Home',
  components: {
    PeekTour
  },
  data() {
    return {
      albums: [{
      name: 'album1',
      images: [{
        name: 'test1',
        url: 'https://via.placeholder.com/150',
        title: '',
        alt: ''
      }]
    }]
    }
  }
}
</script>
