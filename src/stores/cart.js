import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
  const isliked = ref(false);
  const add = ref(false);
  const cartItem = ref([])
  // const cartID =  ref(null);

  //change state
  function toggleLike() {
    isliked.value = !isliked.value
    console.log(isliked.value)
  }

  // function addCartID(ID) {
  //   cartID.value = ID;
  // }

  function toggleAdd() {
    add.value = !add.value 
  }

  return { isliked, add, toggleLike, cartItem, toggleAdd }
})
