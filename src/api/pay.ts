import instance from '@/config/axios'

// 定义返回数据类型
interface Response {
  code: number
  message: string
  data: any
}

export const purchaseByCode = (code: string): Promise<Response> => {
  return instance.post('/trials/v1/purchase', { code })
}

