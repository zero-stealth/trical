<script setup>
import axios from "axios";
import { ref } from "vue";
// import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
// const router = useRouter();
const username = ref();
const password = ref();
const errorMsg = ref();

const reset = () => {
  username.value = "";
  password.value = "";
};

const submit = () => {
  if (username.value != "" && password.value != "") {
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8080/api/account/login.php",
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
          case "login successfully":
            AuthStore.getUsername(response.data.account_name);
            // console.log(response.data.account_name);
        AuthStore.toggleisAuthenticated();
        // router.push({ name: "Home" });

            break;
          case "login failed":
            errorMsg.value = response.data.message;
            // console.log(errorMsg.value);
            break;
          default:
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
    <form @submit.prevent="submit()" class="auth-form">
      <div class="auth-info">
        <h1>Login,</h1>
        <span>Welcome back</span>
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
          <label for="password">password</label>
          <input
            type="password"
            class="auth-input"
            placeholder="************"
            v-model="password"
          />
        </div>
        <div class="forgot-p">
          <a href="#" @click="AuthStore.toggleResetPage()"
            ><span>Forgot password</span></a
          >
        </div>
        <div class="error-msg">
          <span>{{ errorMsg }}</span>
        </div>
      </div>
      <div class="btn-auth">
        <button type="submit" class="btn-auth-c" @keyup.enter="submit()">
          Login
        </button>
        <span
          >Don't have an account?<a href="#" @click="AuthStore.toggleAuthPage()"
            >Signin</a
          ></span
        >
      </div>
    </form>
  </div>
</template>
<style>
@import "@/style/auth.css";
</style>
