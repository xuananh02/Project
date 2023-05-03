import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      components: {
        default: HomeView,
        Header,
        Footer
      }
    },
    {
      path: '/admin/login',
      name: 'login',
      component: Login
    },
  ]
})

export default router
