<template>
  <transition name="fade">
    <div v-if="visible" class="global-message" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const visible = ref(false)
const message = ref('')
const type = ref('error')
let timer: number | null = null

function show(msg: string, msgType = 'error', duration = 2500) {
  message.value = msg
  type.value = msgType
  visible.value = true
  if (timer) clearTimeout(timer)
  timer = window.setTimeout(() => {
    visible.value = false
  }, duration)
}

// 让外部可以调用 show
defineExpose({ show })
</script>

<style scoped>
.global-message {
  position: fixed;
  top: 60px;
  left: 50%;
  transform: translateX(-50%);
  background: #e63946;
  color: #fff;
  padding: 14px 32px;
  border-radius: 8px;
  font-size: 1.1rem;
  z-index: 9999;
  box-shadow: 0 2px 8px #0002;
  transition: all 0.3s;
}
.global-message.error {
  background: #e63946;
}
.global-message.success {
  background: #2ecc71;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>
