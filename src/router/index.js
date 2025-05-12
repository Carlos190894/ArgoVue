import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../Pages/UserLogin.vue';
import AboutPage from '../Pages/Login_1.vue';
import EstadoPage from '../Pages/Login_2.vue';
import ImagenPage from '../Pages/Login_3.vue';
import InteresPage from '../Pages/Login_4.vue';
import TerminadoPage from '../Pages/Login_5.vue';
import FinalPage from '../Pages/Login_6.vue';

const routes = [
  {
    path: '/',
    name: 'UserLogin',
    component: HomePage,
  },
  {
    path: '/Login_1',
    name: 'Login_1',
    component: AboutPage,
  },
  {
    path : '/Login_2',
    name: 'Login_2',
    component: EstadoPage,
  },
  {
    path : '/Login_3',
    name : 'Login_3',
    component: ImagenPage,
  },
  {
    path : '/Login_4',
    name : 'Login_4',
    component: InteresPage,
  },
  {
    path : '/Login_5',
    name : 'Login_5',
    component: TerminadoPage,
  },
  {
    path : '/Login_6',
    name : 'Login_6',
    component: FinalPage,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

