import { createRouter, createWebHistory } from 'vue-router';

// Importa los componentes que usarás en las rutas
import Login from '@/components/UserLogin.vue';

const routes = [
  { path: '/UserLogin', component: Login },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;