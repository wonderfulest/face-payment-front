<template>
  <footer class="footer">
    © 2025 WristoIo. <a href="#">Terms of Use</a>. <a href="#">Privacy Policy</a>.
    <slot />
  </footer>
</template>

<script setup lang="ts">
// 通用 Footer 组件，无需特殊逻辑
</script>

<style scoped>
.footer {
  margin-top: 32px;
  color: #888;
  font-size: 0.98rem;
}
.footer a {
  color: #888;
  text-decoration: underline;
  margin: 0 4px;
}
</style> 