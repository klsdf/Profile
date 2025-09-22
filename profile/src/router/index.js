import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

// import AboutView  from '../views/AboutView.vue'

import WorkView from '@/views/WorkView.vue'

import ProjectView from '@/views/ProjectView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: ()=>import("@/views/AboutView.vue")
  },
  {
    path: '/work',
    name: 'work',
    component: WorkView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
