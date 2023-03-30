<script setup>
import axios from "axios";
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
const username = ref();
const password = ref();
const email = ref();
const errorMsg = ref();




const reset = () => {
  username.value = '';
  password.value = '';
  email.value = '';

};

const submit = () => {
  if (username.value != "" && password.value != "" & email.value != "") {
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8080/api/account/signIn.php",
      headers: {
        "Content-Type": "application/json",
      },
      data: { username: username.value, password: password.value },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        switch (response.data.message) {
          case "account created":
            AuthStore.getUsername(response.data.account_name);
            // console.log(response.data.account_name);
        AuthStore.toggleisAuthenticated();
        // router.push({ name: "Home" });

            break;
          case "account not created":
            errorMsg.value = response.data.message;
            // console.log(errorMsg.value);
            break;
          default:
          errorMsg.value = response.data
            break;
        }
      })
      .catch(function (error) {
        console.error(error);
        errorMsg.value = error;
      });

    reset();
  } else {
    errorMsg.value = "Write something dummy"
  }
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
            placeholder="kakashi (4 character long)"
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
        <button type="submit" class="btn-auth-c"  @keyup.enter="submit()">Create an account</button>
        <span>Already have an account?<a href="#" @click="AuthStore.toggleAuthPage()">Login</a></span>
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/auth.css";
</style>
