import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import WorkCategory from '../views/WorkCategory.vue'
import Contact from '../views/Contact.vue'
import About from '../views/About.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'worklist',
      component: WorkCategory
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/details/:slug',
      name: 'workdetails',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/WorkDetails.vue')
    }
  ]
})

export default router
