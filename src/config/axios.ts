import axios from 'axios'

const instance = axios.create({
  baseURL: '/api', // 走 vite 代理
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
})

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 统一处理 code
    if (response.data.code !== 0) {
      // 调用全局消息
      if (window.$globalMessage) {
        window.$globalMessage(response.data.message || '请求失败', 'error')
      } else {
        window.alert(response.data.message || '请求失败')
      }
      // 直接 reject，业务代码不用再判断 code
      return Promise.reject(response.data)
    }
    // code === 0，直接返回 data
    return response.data
  },
  error => {
    if (window.$globalMessage) {
      window.$globalMessage('网络错误，请稍后重试', 'error')
    } else {
      window.alert('网络错误，请稍后重试')
    }
    return Promise.reject(error)
  }
)

export default instance
