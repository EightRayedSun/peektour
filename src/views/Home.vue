<template>
  <div class="home">
    <peek-tour />
  </div>
</template>

<script>
// @ is an alias to /src
import PeekTour from '@/components/Peektour.vue';

export default {
  name: 'Home',
  components: {
    PeekTour
  }
}
</script>
