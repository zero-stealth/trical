import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useDrawerStore = defineStore('drawer', () => {

  const isDrawerOpen = ref(false)

  const toggleDrawer = () => {
    isDrawerOpen.value = !isDrawerOpen.value;
  }

  return { isDrawerOpen, toggleDrawer }
})
