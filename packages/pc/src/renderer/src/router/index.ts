import { RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router';
import BaseLayout from '@renderer/components/baseLayout.vue';
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: BaseLayout,
    redirect: '/chat',
    children: [
      {
        path: '/chat',
        component: () => import('@renderer/pages/chat/index.vue')
      }
    ]
  },
  {
    path: '/call',
    component: () => import('@renderer/pages/call.vue')
  },
  {
    path: '/add',
    component: () => import('@renderer/pages/add.vue')
  },
  {
    path: '/qzone',
    component: () => import('@renderer/pages/qzone.vue')
  },
  {
    path: '/fileManagement',
    component: () => import('@renderer/pages/file/index.vue')
  },
  {
    path: '/login',
    component: () => import('@renderer/pages/login.vue')
  },
  {
    path: '/about',
    component: () => import('@renderer/pages/about.vue')
  }
];
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
