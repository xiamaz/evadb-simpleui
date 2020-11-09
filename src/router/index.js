import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/searches',
    name: 'Searches',
    component: () => import('@/views/Searches.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/variants/:patientId',
    name: 'Variants',
    component: () => import('@/views/Variants.vue'),
    props: true,
    meta: {requiresAuth: true},
  },
  {
    path: '/sample/:patientId',
    name: 'Sample',
    props: true,
    component: () => import('@/views/Sample.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/views/Projects.vue'),
    meta: {requiresAuth: true},
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue'),
    meta: {hidesAuth: true},
  }
]

const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: 'is-active',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isLoggedIn) {
      next({name: "Login"})
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.hidesAuth)) {
    if (store.getters.isLoggedIn) {
      next({name: "Home"})
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
