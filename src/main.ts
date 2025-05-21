import { createApp, ref } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import GlobalMessage from '@/components/GlobalMessage.vue'

const app = createApp(App)
const globalMessageRef = ref()
app.use(router)
app.component('GlobalMessage', GlobalMessage)
app.mount('#app')

// 绑定到 window
(window as any).$globalMessage = (msg: string, type = 'error', duration = 2500) => {
  globalMessageRef.value?.show(msg, type, duration)
}
