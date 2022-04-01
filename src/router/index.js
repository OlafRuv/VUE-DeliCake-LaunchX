import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AdminView from '../views/AdminView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/adminView',
    name: 'adminView',
    component: AdminView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
