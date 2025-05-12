import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/fonts.css'; // Importa las fuentes

const app = createApp(App);

app.use(router);
app.mount('#app');

