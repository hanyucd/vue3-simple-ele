// import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vant/es/dialog/style';

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');

// declare let x: number;
// eslint-disable-next-line @typescript-eslint/no-unused-vars, prefer-const
// x = 123; // 报错
