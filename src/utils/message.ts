import { getCurrentInstance, inject } from 'vue'

export function useGlobalMessage() {
  // 组件内使用
  const instance = getCurrentInstance()
  if (instance) {
    const globalMessage = inject('globalMessage') as any
    return (msg: string, type = 'error', duration = 2500) => {
      globalMessage.value?.show(msg, type, duration)
    }
  }
  // 组件外使用
  if ((window as any).$globalMessage) {
    return (msg: string, type = 'error', duration = 2500) => {
      (window as any).$globalMessage(msg, type, duration)
    }
  }
  return () => {}
}
