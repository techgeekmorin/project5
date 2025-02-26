import { createRouter, createWebHistory } from 'vue-router'

import StorePage from '@/views/StorePage.vue'
import ItemDescPage from '@/views/ItemDescPage.vue'

const routes = [
  { path: '/project5/', name: 'Store', component: StorePage },
  { path: '/project5/Cart', name: 'Cart', component: () => import('@/views/CartPage.vue') },
  { path: '/project5/Item/:desc', name: 'itemDescPage', component: ItemDescPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
