<script setup>
import { ref , watchEffect } from "vue";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
const username = ref('');
const newPassword = ref('');
const errorMsg = ref();

const setSignIn = () => {
    AuthStore.logIn();
};

const submit = () => {
  if (username.value == '') {
    errorMsg.value = 'Write something dummy';
  } else if (newPassword.value.length < 5) {
    errorMsg.value = 'password must be at least 5 characters long'

  } else {
    reset();
  }

}

const reset = () => {
  newPassword.value = '';
  username.value = '';

};


</script>
<template>
  <div class="auth-container">
    <form @submit.prevent="submit" class="auth-form">
      <div class="auth-info">
        <h1>Reset Password,</h1>
        <span>change you password below</span>
      </div>
      <div class="input-wrapper">
        <div class="auth-wrapper-w">
          <label for="username">username</label>
          <input type="text" class="auth-input" placeholder="kakashi uchiha" v-model="username" />
        </div>
        <div class="auth-wrapper-w">
          <label for="password">new password</label>
          <input type="password" class="auth-input" placeholder="************" v-model="newPassword" />
        </div>
        <div class="error-msg">
          <span>{{ errorMsg }}</span>
        </div>
      </div>
      <div class="btn-auth">
        <button type="submit" class="btn-auth-c" @keyup.enter="submit">Reset</button>
        <span>Don't have an account?<a href="#" @click="setSignIn">Signin</a></span>
      </div>
    </form>
</div>
</template>
<style>@import "@/style/auth.css";</style>
