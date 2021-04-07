import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Album from '@/components/Album.vue';
import Image from '@/components/Image.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/album/:id',
    name: 'album',
    component: Album,
    props: true,
    children: [
      {
        path: 'image/:imageId',
        name: 'image',
        component: Image,
        props: true
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
