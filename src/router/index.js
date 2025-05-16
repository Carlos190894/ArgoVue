import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/Pages/Login/UserLogin.vue';
import AboutPage from '@/Pages/Login/Login_1.vue';
import EstadoPage from '@/Pages/Login/Login_2.vue';
import ImagenPage from '@/Pages/Login/Login_3.vue';
import InteresPage from '@/Pages/Login/Login_4.vue';
import TerminadoPage from '@/Pages/Login/Login_5.vue';
import FinalPage from '@/Pages/Login/Login_6.vue';
import Home from '@/Pages/Home/Home.vue';
import Busqueda  from '@/Pages/Busqueda/Busqueda.vue';
import Pais  from '@/Pages/Busqueda/BusquedaPais.vue';

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
  },
  {
    path : '/Home',
    name : 'Home',
    component: Home,
  },
  {
    path : '/Busqueda',
    name : 'Busqueda',
    component: Busqueda,
  },
  {
    path : '/BusquedaPais',
    name : 'BusquedaPais',
    component: Pais,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

