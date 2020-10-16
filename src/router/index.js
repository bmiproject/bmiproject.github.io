import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeMain from '@/views/main/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeMain
  },
  {
    path: '/store',
    name: 'Home',
    component: () => import('@/views/ecommerce/Home.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
