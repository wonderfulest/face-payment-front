import type { RouteRecordRaw } from 'vue-router'
import CodeInput from '@/components/CodeInput.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/code' },
  { path: '/code', component: CodeInput },
  {
    path: '/shop/options',
    name: 'ShopOptions',
    component: () => import('@/views/ShopOptions.vue'),
  },
]

export default routes 