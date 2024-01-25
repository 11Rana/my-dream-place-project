import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import './assets/tailwind.css';
// createApp(App).use(router).mount('#app')


const app = createApp(App);
// const pinia =createPinia();
 app.use(createPinia())
// app.use(pinia); 
app.use(router);
app.mount('#app');