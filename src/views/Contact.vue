<template>
  <div class="contact-faq">
    <Logo />
    <h2 class="title">产品支持与联系</h2>
    <p class="desc">有关于 <span class="product-name">{{ productName }}</span> 的问题？我们为你解答：</p>
    <div class="faq-list">
      <div class="faq-item" v-for="(item, idx) in faqs" :key="idx">
        <h3 class="faq-q">{{ item.q }}</h3>
        <div class="faq-a" v-html="item.a"></div>
      </div>
    </div>
    <div class="contact-block">
      <h3>还需要帮助？</h3>
      <p>请通过以下方式联系我们：</p>
      <ul>
        <li>邮箱：<a :href="`mailto:support@wristo.io?subject=产品咨询:${productName}`">support@wristo.io</a></li>
        <li>或在下方留言，我们会尽快回复。</li>
      </ul>
      <textarea placeholder="请输入你的问题或反馈..." v-model="message"></textarea>
      <button class="send-btn" @click="sendMessage">发送</button>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import Footer from '@/components/Footer.vue'
import Logo from '@/components/Logo.vue'

const route = useRoute()
const productId = computed(() => route.params.productId)
// 实际项目可根据 productId 获取产品名，这里演示用
const productName = computed(() => `产品 #${productId.value}`)

const faqs = [
  {
    q: '我已经购买了，为什么还会被再次收费？',
    a: '部分情况下，系统无法识别你已购买的记录（如重装应用/表盘），可通过 <a href="https://kzl.io/unlock" target="_blank">此页面</a> 免费解锁。',
  },
  {
    q: '如何获取我的购买码？',
    a: '无需专门的购买码，直接在设备上安装表盘/应用并按提示操作即可。如需再次解锁，可访问 <a href="https://kzl.io/unlock" target="_blank">此页面</a>。',
  },
  {
    q: '这是一次性付费还是订阅？',
    a: '所有表盘/应用均为一次性付费，终身使用。',
  },
  {
    q: '我如何查找我过去购买的内容？',
    a: '可通过 <a href="https://kiezelpay.com/lookup" target="_blank">购买历史查询</a> 页面查看所有购买记录。',
  },
  {
    q: '我购买了捆绑包，如何安装其他表盘/应用？',
    a: '购买后会收到包含所有内容的下载链接邮件，或在 <a href="https://kiezelpay.com/lookup" target="_blank">此页面</a> 查询。',
  },
  {
    q: '遇到问题无法解锁或找不到购买记录怎么办？',
    a: '请确认邮箱填写无误，或通过页面下方联系方式联系我们。',
  },
]

const message = ref('')
function sendMessage() {
  if (!message.value.trim()) {
    alert('请输入你的问题或反馈')
    return
  }
  // 这里可集成实际的消息发送逻辑
  alert('已收到，我们会尽快回复！')
  message.value = ''
}
</script>

<style scoped>
.contact-faq {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px 0 16px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #fff;
  background: #111;
  min-height: 100vh;
}
.logo {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #fff;
}
.logo span {
  color: #6fcf97;
}
.title {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
  color: #fff;
}
.desc {
  color: #bbb;
  margin-bottom: 2rem;
}
.product-name {
  color: #6fcf97;
  font-weight: bold;
}
.faq-list {
  margin-bottom: 2.5rem;
}
.faq-item {
  margin-bottom: 1.8rem;
  background: #181818;
  border-radius: 12px;
  padding: 18px 20px;
  box-shadow: 0 2px 12px #0002;
}
.faq-q {
  font-size: 1.1rem;
  color: #6fcf97;
  margin-bottom: 8px;
}
.faq-a {
  color: #eee;
  font-size: 1rem;
}
.contact-block {
  background: #181818;
  border-radius: 12px;
  padding: 20px 20px 24px 20px;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 12px #0002;
}
.contact-block h3 {
  color: #6fcf97;
  margin-bottom: 8px;
}
.contact-block ul {
  margin: 0 0 10px 0;
  padding-left: 18px;
  color: #eee;
}
.contact-block textarea {
  width: 100%;
  min-height: 70px;
  border-radius: 8px;
  border: 1px solid #333;
  padding: 10px;
  margin: 10px 0 12px 0;
  font-size: 1rem;
  background: #222;
  color: #fff;
  resize: vertical;
}
.send-btn {
  background: #2d6a4f;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 28px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.send-btn:hover {
  background: #40916c;
}
a {
  color: #6fcf97;
  text-decoration: underline;
}
</style> 