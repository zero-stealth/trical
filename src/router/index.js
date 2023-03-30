import { createRouter, createWebHistory } from 'vue-router'
import SplashView from '@/views/SplashView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splash',
      component: SplashView
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('@/views/AdminView.vue')
    },
    {
      path: '/welcome',
      name: 'Welcome',
      component: () => import('@/views/WelcomeView.vue')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/views/HomeView.vue')
    },
    {
      path: '/search',
      name: 'Search',
      component: () => import('@/views/SearchView.vue')
    },
    {
      path: '/details',
      name: 'Details',
      component: () => import('@/views/DetailView.vue')
    },
    {
      path: '/notification',
      name: 'Notification',
      component: () => import('@/views/notificationView.vue')
    },
    {
      path: '/cart',
      name: 'Cart',
      component: () => import('@/views/CartView.vue')
    },
    {
      path: '/account',
      name: 'Account',
      component: () => import('@/views/AccountView.vue')
    },
    {
      path: '/settings',
      name: 'Settings',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/SettingsView.vue')
    }
  ]
})

export default router
