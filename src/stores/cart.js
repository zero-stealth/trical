import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const isliked = ref(false);
  const add = ref(false);


  function toggleLike() {
    isliked.value !== isliked.value 
  }

  function toggleAdd() {
    add.value !== add.value 
  }

  return { isliked, add, toggleLike, toggleAdd }
})
