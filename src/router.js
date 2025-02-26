import { createRouter, createWebHistory } from 'vue-router'

import StorePage from '@/views/StorePage.vue'
import ItemDescPage from '@/views/ItemDescPage.vue'
import AccountDetailsPage from './views/AccountDetailsPage.vue'
import LoginPage from './views/LoginPage.vue'

import { useAuth } from './composables/useAuth'
const {isAuthenticated} = useAuth()

const routes = [
  { path: '/project5/', name: 'Store', component: StorePage },
  { path: '/project5/cart', name: 'Cart', component: () => import('@/views/CartPage.vue') },
  { path: '/project5/item/:name/:desc', name: 'itemDescPage', component: ItemDescPage },
  { path: '/project5/login', name: 'Login', component: LoginPage },
  { path: '/project5/account-details', name: 'AccountDetails', component: AccountDetailsPage, meta: {requiresAuth: true} },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

//navigation guard
router.beforeEach((to, _, next) => {
  if (to.meta.requiresAuth && !isAuthenticated.value) {
    next({name: 'Login', query: {redirect: to.fullPath}})
  } else {
    next()
  }
})

export default router
