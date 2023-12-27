import { createRouter, createWebHistory } from 'vue-router';
import tabbar from '@/views/tabbar/tabbar.vue';
import tabIndex from '@/views/tabbar/tab-index/tab-index.vue';
import tabOrder from '@/views/tabbar/tab-order/tab-order.vue';
import tabProfile from '@/views/tabbar/tab-profile/tab-profile.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'tabbarRoute',
      redirect: '/index',
      component: tabbar,
      children: [
        { path: '/index', name: 'indexRoute', component: tabIndex },
        { path: '/order', name: 'orderRoute', component: tabOrder },
        { path: '/profile', name: 'profileRoute', component: tabProfile },
      ],
    },
    {
      path: '/login',
      name: 'loginRoute',
      component: () => import('@/views/login/login.vue'),
    },
  ],
});

export default router;
