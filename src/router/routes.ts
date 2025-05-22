import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/code' },
  { 
    path: '/code', 
    name: 'CodeInput', 
    component: () => import('@/views/CodeInput.vue') 
  },
  {
    path: '/shop/options',
    name: 'ShopOptions',
    component: () => import('@/views/ShopOptions.vue'),
  },
]

export default routes 