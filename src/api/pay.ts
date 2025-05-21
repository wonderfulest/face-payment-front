import instance from '@/config/axios'

export const purchaseByCode = async (code: string) => {
  const res = await instance.post('/trials/v1/purchase', { code })
  return res.data
}
