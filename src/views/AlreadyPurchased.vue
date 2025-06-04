<template>
  <div class="already-purchased-page">
    <Logo />
    <h1 class="title">查找我的历史购买</h1>
    <p class="desc">请输入你购买时填写的邮箱地址，我们会帮你查找所有历史订单。</p>
    <form class="lookup-form" @submit.prevent="handleLookup">
      <input v-model="email" type="email" placeholder="请输入邮箱" class="email-input" required />
      <button class="lookup-btn" :disabled="loading">查找</button>
    </form>
    <div v-if="error" class="error">{{ error }}</div>
    <div v-if="orders.length" class="orders-list">
      <h2>历史订单</h2>
      <ul>
        <li v-for="(order, idx) in orders" :key="idx">
          <div>产品：{{ order.productName }}</div>
          <div>金额：${{ order.amount }}</div>
          <div>购买时间：{{ order.date }}</div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'

const email = ref('')
const loading = ref(false)
const error = ref('')
const orders = ref<any[]>([])

async function handleLookup() {
  error.value = ''
  orders.value = []
  if (!email.value.trim()) {
    error.value = '请输入邮箱地址'
    return
  }
  loading.value = true
  // 这里应调用后端接口查找订单，演示用假数据
  setTimeout(() => {
    loading.value = false
    if (email.value === 'test@example.com') {
      orders.value = [
        { productName: 'WristoIo Pro', amount: '3.99', date: '2024-06-01' },
        { productName: 'WristoIo Bundle', amount: '9.99', date: '2024-05-15' },
      ]
    } else {
      error.value = '未找到相关订单，请确认邮箱是否填写正确。'
    }
  }, 1200)
}
</script>

<style scoped>
.already-purchased-page {
  max-width: 480px;
  margin: 0 auto;
  padding: 40px 24px 0 24px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #222;
  background: #fff;
  min-height: 100vh;
}
.title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.2rem;
  text-align: center;
}
.desc {
  color: #666;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  text-align: center;
}
.lookup-form {
  display: flex;
  gap: 12px;
  margin-bottom: 1.5rem;
  justify-content: center;
}
.email-input {
  flex: 1;
  padding: 12px;
  font-size: 1.1rem;
  border: 2px solid #cbd5e1;
  border-radius: 8px;
}
.lookup-btn {
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 0 24px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.lookup-btn:disabled {
  background: #b7b7b7;
  cursor: not-allowed;
}
.error {
  color: #e63946;
  margin-bottom: 1.2rem;
  text-align: center;
}
.orders-list {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 22px 24px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px #0001;
}
.orders-list h2 {
  font-size: 1.15rem;
  color: #2d6a4f;
  margin-bottom: 8px;
}
.orders-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.orders-list li {
  padding: 12px 0;
  border-bottom: 1px solid #e5e7eb;
}
.orders-list li:last-child {
  border-bottom: none;
}
</style> 