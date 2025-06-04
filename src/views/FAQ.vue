<template>
  <div class="faq-page">
    <Logo />
    <h1 class="faq-title">常见问题解答</h1>
    <div class="faq-section">
      <h2>已付费却再次被要求付款？</h2>
      <p>部分情况下，系统无法识别你已购买的记录（如重装应用/表盘），可通过 <a href="https://wristo.io/unlock" target="_blank">此页面</a> 免费解锁。只需输入设备上显示的 code 及原购买邮箱即可。</p>
    </div>
    <div class="faq-section">
      <h2>为什么会收到付费提示？如何关闭？</h2>
      <p>这些提示出现是因为你正在使用付费应用或表盘，且试用期已结束。如不想付费，可卸载该应用/表盘或更换为免费表盘，提示会自动消失。</p>
    </div>
    <div class="faq-section">
      <h2>这是一次性付费还是订阅？</h2>
      <p>所有表盘/应用均为一次性付费，终身使用。但如重装后系统无法识别，可能会再次要求付款，此时可通过 <a href="https://wristo.io/unlock" target="_blank">此页面</a> 免费解锁。</p>
    </div>
    <div class="faq-section">
      <h2>输入 code 后提示"未知或已用过"？</h2>
      <p>每个 code 仅限 1 小时内有效，过期需重启表盘/应用以获取新 code。Fitbit 可通过滑动到 today 屏后返回，Garmin 可重启手表。</p>
    </div>
    <div class="faq-section">
      <h2>如何查找我已购买的内容？</h2>
      <p>可通过 <a href="https://wristo.io/lookup" target="_blank">购买历史查询</a> 页面查看所有购买记录。</p>
    </div>
    <div class="faq-section">
      <h2>购买了捆绑包，如何安装其他表盘/应用？</h2>
      <p>购买后会收到包含所有内容的邮件，或在 <a href="https://wristo.io/lookup" target="_blank">此页面</a> 查询。下载需在已安装 Fitbit/Garmin/Pebble app 的手机/平板上操作。</p>
    </div>
    <div class="faq-section">
      <h2>支持哪些支付方式？</h2>
      <p>支持 PayPal 及信用卡/借记卡支付。信用卡支付会有 $0.30 手续费，建议优先使用 PayPal。</p>
    </div>
    <div class="faq-section">
      <h2>如何申请退款？</h2>
      <p>支持 30 天内退款。请通过页面底部联系方式联系客服，提供订单信息。</p>
    </div>
    <div class="faq-section">
      <h2>没有收到 code？</h2>
      <p>安装表盘/应用后，试用结束时会自动显示 code。未显示时无需操作，功能不受影响。</p>
    </div>
    <div class="faq-section">
      <h2>解锁时提示未购买？</h2>
      <p>请确认购买时邮箱填写无误，或核对解锁的表盘/应用名称与购买邮件一致。如仍有问题，请联系客服并提供 PayPal 订单号或信用卡前 6 后 4 位。</p>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.faq-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 32px 16px 0 16px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #222;
  background: #fff;
  min-height: 100vh;
}
.faq-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: center;
}
.faq-section {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 22px 24px;
  margin-bottom: 1.5rem;
  box-shadow: 0 2px 8px #0001;
}
.faq-section h2 {
  font-size: 1.15rem;
  color: #2d6a4f;
  margin-bottom: 8px;
}
.faq-section p {
  color: #333;
  font-size: 1rem;
  line-height: 1.7;
}
a {
  color: #2d6a4f;
  text-decoration: underline;
}
</style> 