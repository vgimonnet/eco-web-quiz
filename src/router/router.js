import { createRouter, createWebHistory } from 'vue-router'

const routeInfos = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/quiz/back',
    name: 'QuizBack',
    component: () => import('../components/QuizBackPage.vue')
  },
  {
    path: '/quiz/conception',
    name: 'QuizConception',
    component: () => import('../components/QuizConceptionPage.vue')
  },
  {
    path: '/quiz/front',
    name: 'QuizFront',
    component: () => import('../components/QuizFrontPage.vue')
  },
  {
    path: '/quiz/user',
    name: 'QuizUser',
    component: () => import('../components/QuizUserPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes: routeInfos
})

export default router