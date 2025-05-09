import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes que usarás en las rutas
import Login from '@/components/UserLogin.vue';
import Registro from '@/components/Login_1.vue';

const routes = [
  { path: '/UserLogin', component: Login },
  {
    path: '/Login_1',
    name: 'Login_1',
    component: Registro
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;