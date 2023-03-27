import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useProductStore = defineStore('product', () => {

const productID = ref(null);
 
  return { productID }
})
