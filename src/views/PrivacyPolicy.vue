<template>
  <div class="privacy-page">
    <h1 class="privacy-title">Privacy Policy - Wristo</h1>
    <div class="privacy-content">
      <h2>1. Collection and Use of Personal Information</h2>
      <p>We collect your email address to provide order confirmations and essential service updates. You may choose not to provide it, but we may be unable to fulfill your order or assist you.</p>

      <h2>2. How We Use Your Information</h2>
      <ul>
        <li>To send order receipts and product-related notices</li>
        <li>For basic order auditing and customer service</li>
      </ul>

      <h2>3. Non-Personal Information</h2>
      <p>We do not collect non-personal information (such as location, device ID, etc.).</p>

      <h2>4. Cookies</h2>
      <p>We do not use cookies or tracking technologies.</p>

      <h2>5. Disclosure to Third Parties</h2>
      <p>We do not share your personal information with third parties except when required by law or governmental request.</p>

      <h2>6. Your Consent</h2>
      <p>By using our site and services, you consent to our privacy policy and the limited use of your information as described above.</p>

      <h2>7. Contact</h2>
      <p>Questions? Contact us at <a href="mailto:support@wristo.io">support@wristo.io</a></p>
    </div>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Footer from '@/components/Footer.vue'
</script>

<style scoped>
.privacy-page {
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 16px 0 16px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  color: #222;
  background: #fff;
  min-height: 100vh;
}
.privacy-title {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 2.5rem;
  text-align: left;
  letter-spacing: 0.01em;
}
.privacy-content {
  background: #f8f9fa;
  border-radius: 12px;
  padding: 36px 36px 40px 36px;
  margin-bottom: 2.5rem;
  box-shadow: 0 2px 8px #0001;
  text-align: left;
}
.privacy-content h2 {
  font-size: 1.18rem;
  color: #1a3c6b;
  margin-top: 2em;
  margin-bottom: 10px;
  font-weight: 700;
}
.privacy-content p, .privacy-content ul {
  color: #222;
  font-size: 1.04rem;
  line-height: 1.8;
  margin-bottom: 1.1em;
  text-align: left;
}
.privacy-content ul {
  padding-left: 1.5em;
}
a {
  color: #1a3c6b;
  text-decoration: underline;
}
</style> 