<template>
  <div class="shop-options">
    <h1 class="logo">Kiezel<span>Pay</span></h1>
    <h2 class="title">Decision Time</h2>
    <p class="desc">Looks like this creator has some options for you:</p>
    <div class="options">
      <!-- Whole Store 卡片 -->
      <div class="option-card">
        <div class="discount-badge">99% Off</div>
        <div class="images">
          <img src="https://garminface.com/assets/blue-radiance.png" alt="face1" />
          <img src="https://garminface.com/assets/green-digital.png" alt="face2" />
          <img src="https://garminface.com/assets/colorful-analog.png" alt="face3" />
        </div>
        <h3>Whole Store</h3>
        <div class="license">Lifetime License</div>
        <div class="author">By wonderful</div>
        <ul class="features">
          <li>😈 Website: <a href="https://garminface.com" target="_blank">https://garminface.com</a></li>
          <li>📦 This bundle contains all our designs!</li>
          <li>⏰ Limited time offer, over 90% off!</li>
          <li>➕ New clock faces are added to this bundle regularly and will be yours for free!</li>
        </ul>
        <button class="buy-btn">
          Buy for <del>$998.98</del> $9.90
        </button>
      </div>
      <!-- Blue Radiance 卡片 -->
      <div class="option-card">
        <div class="images single">
          <img src="https://garminface.com/assets/blue-radiance.png" alt="Blue Radiance" />
        </div>
        <h3>Blue Radiance</h3>
        <div class="license">Lifetime License</div>
        <div class="author">By wonderful</div>
        <div class="features">Blue Radiance</div>
        <button class="buy-btn">Buy for $1.99</button>
      </div>
    </div>
    <footer>
      © 2025 KiezelPay. <a href="#">Terms of Use</a>. <a href="#">Privacy Policy</a>. KiezelPay is not affiliated with Fitbit or Garmin.
    </footer>
  </div>
</template>

<script setup>
// 这里可以添加跳转、购买等逻辑
</script>

<style scoped>
.shop-options {
  max-width: 900px;
  margin: 0 auto;
  padding: 32px 16px 0 16px;
  font-family: 'Inter', 'Helvetica Neue', Arial, sans-serif;
  text-align: center;
}
.logo {
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.logo span {
  color: #6fcf97;
}
.title {
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
}
.desc {
  color: #444;
  margin-bottom: 2rem;
}
.options {
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}
.option-card {
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 2px 16px 0 #0001;
  padding: 28px 20px 20px 20px;
  width: 320px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.discount-badge {
  position: absolute;
  top: -18px;
  left: 50%;
  transform: translateX(-50%);
  background: #e63946;
  color: #fff;
  font-weight: bold;
  border-radius: 12px;
  padding: 4px 18px;
  font-size: 1rem;
  box-shadow: 0 2px 8px #e6394633;
}
.images {
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
  justify-content: center;
}
.images img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #eee;
  background: #fafafa;
}
.images.single img {
  width: 80px;
  height: 80px;
}
h3 {
  margin: 10px 0 4px 0;
  font-size: 1.2rem;
  font-weight: 700;
}
.license {
  background: #ffb703;
  color: #222;
  font-size: 0.95rem;
  font-weight: 600;
  border-radius: 6px;
  padding: 2px 10px;
  display: inline-block;
  margin-bottom: 4px;
}
.author {
  color: #888;
  font-size: 0.95rem;
  margin-bottom: 8px;
}
.features {
  text-align: left;
  margin: 0 0 16px 0;
  padding: 0 0 0 18px;
  color: #444;
  font-size: 0.98rem;
}
.features li {
  margin-bottom: 4px;
}
.buy-btn {
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
.buy-btn:hover {
  background: #40916c;
}
del {
  color: #888;
  margin-right: 4px;
}
footer {
  margin-top: 32px;
  color: #888;
  font-size: 0.98rem;
}
footer a {
  color: #888;
  text-decoration: underline;
  margin: 0 4px;
}
</style> 