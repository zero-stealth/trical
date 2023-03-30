import { ref, onMounted, } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const isAuthenticated = ref(false);
  const Username = ref(null);
  const userId = ref(null);
  const authPage = ref(false);
  const resetPage = ref(false);
  const timeOut = ref(3000);


  //ensures that the splash screen is not displayed after login
  onMounted(() => {
    switch (isAuthenticated.value) {
      case false:
        timeOut.value = 3000;
        break;
      case true:
        timeOut.value = 0;
        break;
      default:
        break;
    }

  })

    //change state
    const toggleisAuthenticated = () => {
      isAuthenticated.value = !isAuthenticated.value;
    }
  //change state
  const toggleResetPage = () => {
    resetPage.value = !resetPage.value;
  }

  const getUserID = (ID) => {
    userId.value = ID;
  }

  const getUsername = (user) => {
    Username.value = user
    // console.log(Username.value)
  }

  //change state
  const toggleAuthPage = () => {
    authPage.value = !authPage.value;
  }

  return {
    timeOut, Username, userId, getUserID, toggleisAuthenticated, getUsername, toggleResetPage, isAuthenticated, toggleAuthPage, authPage, resetPage
  }
})
