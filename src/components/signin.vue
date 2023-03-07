<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
const username = ref('');
const password = ref('');
const email = ref('');
const errorMsg = ref();

const submit = () => {
  if (username.value.length < 4 ) {
    errorMsg.value = 'username must be at least 4 characters long'
  } else if (password.value.length < 5) {
    errorMsg.value = 'password must be at least 5 characters long'
  } else {
    reset();
  }

}

const reset = () => {
  username.value = '';
  password.value = '';
  email.value = '';

};


</script>
<template>
  <div class="auth-container">
    <form @submit.prevent="submit" class="auth-form">
      <div class="auth-info">
        <h1>Welcome,</h1>
        <span>Start shopping better</span>
      </div>
      <div class="input-wrapper">
        <div class="auth-wrapper-w">
          <label for="username">username</label>
          <input
            type="text"
            class="auth-input"
            placeholder="kakashi uchiha"
            v-model="username"
          />
        </div>
        <div class="auth-wrapper-w">
          <label for="email">email</label>
          <input
            type="email"
            class="auth-input"
            placeholder="kakashiuchiha@gmail.com"
            v-model="email"
          />
        </div>
        <div class="auth-wrapper-w">
          <label for="password">password</label>
          <input
            type="password"
            class="auth-input"
            placeholder="************"
            v-model="password"

          />
        </div>
        <div class="error-msg">
          <span>{{ errorMsg }}</span>
        </div>
      </div>
      <div class="btn-auth">
        <button type="submit" class="btn-auth-c"  @keyup.enter="submit">Create an account</button>
        <span>Already have an account?<a href="#" @click="AuthStore.toggleAuthPage()">Login</a></span>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/auth.css";
</style>
