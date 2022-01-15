import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: () => import("../views/homepage.vue")
  },
  {
    path: '/stand/:materialId',
    name: 'stand',
    component: () => import('../views/stand.vue')
  },
  {
    path: '/cart',
    name: 'cartt',
    component: () => import("../views/cart.vue")
  },
  {
    path: '/login',
    name: 'login',
    component: () => import("../views/login/login.vue")
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import("../views/login/signup.vue")
  },
  {
    path: '/errorlogin',
    name: 'errorpage',
    component: () => import("../views/loginerr.vue")
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(stand, homepage, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    return {
      left: 0, top: 0
    }
  }
})

export default router


