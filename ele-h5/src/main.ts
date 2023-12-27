// import './assets/main.css';
import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

import 'vant/lib/index.css';
import 'normalize.css/normalize.css';
// import 'amfe-flexible';

import 'vant/es/dialog/style';

const app = createApp(App);

app.use(createPinia());
app.use(router);

const rootValue = 16; // 设计稿的字体
const rootWidth = 390; // 设计稿宽度
const deviceWidth = document.documentElement.clientWidth;
document.documentElement.style.fontSize = (deviceWidth * rootValue) / rootWidth + 'px';

app.mount('#app');
