import { defineStore } from 'pinia'

export const useShopOptionsStore = defineStore('shopOptions', {
  state: () => ({
    data: null as any
  }),
  actions: {
    setData(data: any) {
      this.data = data
    }
  },
  persist: true
})
