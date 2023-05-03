import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Login from '../views/Login.vue';
import ListReview from '../views/ListReview.vue';
import Header from '../components/Header.vue';
import AddReview from '../views/AddReview.vue';
import Footer from '../components/Footer.vue';
import DetailReview from '../views/DetailReview.vue';
import EditReview from '../views/EditReview.vue';

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
    {
      path: '/admin/reviews/stored',
      name: 'stored-reviews',
      components: {
        default: ListReview,
        Header,
        Footer
      }
    },
    {
      path: '/admin/reviews/add',
      name: 'add-review',
      components: {
        default: AddReview,
        Header,
        Footer
      }
    },
    {
      path: '/reviews/:id',
      name: 'detail-review',
      components: {
        default: DetailReview,
        Header,
        Footer
      }
    },
    {
      path: '/reviews/edit/:id',
      name: 'edit-review',
      components: {
        default: EditReview,
        Header,
        Footer
      }
    },
  ]
})

export default router
