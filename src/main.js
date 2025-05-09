import { createApp } from 'vue';
import App from './components/UserLogin.vue';
import router from './router/index'; // Importa el archivo de configuración de rutas

const app = createApp(App);

app.use(router); // Usa Vue Router
app.mount('#app');

