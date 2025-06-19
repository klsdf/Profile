import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/GameView.vue')
  },
 
  {
    path: '/music',
    name: 'music',
    component: () => import('../views/MusicView.vue')
  },
  {
    path: '/art',
    name: 'art',
    component: () => import('../views/Art.vue')
  },
  {
    path: '/game-community',
    name: 'game-community',
    component: () => import('../views/GameCommunity.vue')
  },
  {
    path: '/article',
    name: 'article',
    component: () => import('../views/ArticleView.vue')
  },
  {
    path: '/technology',
    name: 'technology',
    component: () => import('../views/Technology.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/game/:gameName',
    name: 'GameDetail',
    component: () => import('../views/GameDetail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
