import { createRouter, createWebHistory } from 'vue-router'

const routeInfos = [
  {
    path: '/',
    name: 'HomePage',
    component: () => import('../components/HomePage.vue')
  },
  {
    path: '/quiz/dev',
    name: 'QuizDev',
    component: () => import('../components/QuizDevPage.vue')
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