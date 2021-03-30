import Vue from 'vue'
import VueRouter from 'vue-router'
import DiscoverView from '../views/DiscoverView.vue'
import FeedView from '../views/FeedView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/discover',
    alias: '/',
    name: 'DiscoverView',
    component: DiscoverView
  },
  {
    path: '/feed',
    name: 'FeedView',
    component: FeedView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
