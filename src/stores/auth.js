import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {

  const isAuthenticated = ref(false);
  // set state for welcome page
  const isLogIn = ref(false);
  const resetAccount = ref(false);

  //toggle state
  const logIn = () => {
    isLogIn.value = !isLogIn.value;
  }

  const Authenticate = () => {
    isAuthenticated.value = true;
  }

  //toggle state
  const reset = () => {
    resetAccount.value = !resetAccount.value
  }


  return { isLogIn, logIn, reset, resetAccount, isAuthenticated, Authenticate }
})
