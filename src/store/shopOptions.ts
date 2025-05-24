import { defineStore } from 'pinia'

export const useShopOptionsStore = defineStore('shopOptions', {
  state: () => ({
    data: null as any,
    selectedProduct: null as any
  }),
  actions: {
    setData(data: any) {
      this.data = data
    },
    setSelectedProduct(product: any) {
      this.selectedProduct = product
    },
    reset() {
      this.data = null
      this.selectedProduct = null
    }
  },
  persist: true
})
