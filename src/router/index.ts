import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue'
import Content from '@/components/homepage/Content.vue'
import AboutUs from '@/components/homepage/AboutUs.vue'
import Login from '@/components/login/Login.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',redirect:'/home',
      component: HomePage,
      children: [
        {
          path: 'home',
          component:Content
        },
        {
          path: 'about-us',
          component:AboutUs
        },

      ]
    },
    {
      path: '/login',
      component: Login
    }
  ]
})

export default router
