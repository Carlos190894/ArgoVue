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
import Estado  from '@/Pages/Busqueda/BusquedaEstado.vue';
import Producto  from '@/Pages/Busqueda/BusquedaProducto.vue';
import Publicacion from '@/Pages/Busqueda/BusquedaPublicacion.vue';
import Chat from '@/Pages/Chat/Chat.vue';
import ChatInicial from '@/Pages/Chat/ChatInicial.vue';
import ChatPremium from '@/Pages/Chat/ChatPremium.vue';
import ChatSinSubscripcion from '@/Pages/Chat/ChatSinSubscripcion.vue';
import PerfilUsuario from '@/Pages/Perfil/PerfilUsuario.vue';

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
    path : '/ArgoPage',
    name : 'ArgoPage',
    component: Home,
  },
  {
    path : '/ArgoBusqueda',
    name : 'ArgoBusqueda',
    component: Busqueda,
  },
  {
    path : '/BusquedaPais',
    name : 'BusquedaPais',
    component: Pais,
  },
  {
    path : '/BusquedaEstado',
    name : 'BusquedaEstado',
    component: Estado,
  },
  {
    path : '/BusquedaProducto',
    name : 'BusquedaProducto',
    component: Producto,
  },
  {
    path : '/BusquedaPublicacion',
    name : 'BusquedaPublicacion',
    component: Publicacion,
  },
  {
    path : '/ChatPrincipal',
    name : 'ChatPrincipal',
    component: Chat,
  },
  {
    path : '/ChatInicial',
    name : 'ChatInicial',
    component: ChatInicial,
  },
  {
    path : '/ChatPremium',
    name : 'ChatPremium',
    component: ChatPremium,
  },
  {
    path : '/ChatSinSubscripcion',
    name : 'ChatSinSubscripcion',
    component: ChatSinSubscripcion,
  },
  {
    path : '/PerfilUsuario',
    name : 'PerfilUsuario',
    component: PerfilUsuario,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

