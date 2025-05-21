<script setup lang="ts">
import { ref, provide } from 'vue'
import GlobalMessage from '@/components/GlobalMessage.vue'
import CodeInput from './components/CodeInput.vue'

const globalMessageRef = ref()
provide('globalMessage', globalMessageRef)
</script>

<template>
  <router-view />
  <GlobalMessage ref="globalMessageRef" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
