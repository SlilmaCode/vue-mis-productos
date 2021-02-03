import { createRouter, createWebHistory } from 'vue-router'

import Productos from '@/views/productos/Productos.vue'
import MisFavoritos from '@/views/productos/MisFavoritos.vue'

const routes = [
  {
    path: '/',
    name: 'productos',
    component: Productos
  },
  {
    path: '/favoritos',
    name: 'favoritos',
    component: MisFavoritos
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
