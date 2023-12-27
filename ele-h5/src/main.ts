// import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'normalize.css/normalize.css';
import 'amfe-flexible';

import 'vant/es/dialog/style';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
