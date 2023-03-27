<script setup>
import { ref, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
const username = ref('');
const password = ref('');
const email = ref('');
const errorMsg = ref();


const data = JSON.stringify({
  "username": username,
  "email": email,
  "password": password,
})

const reset = () => {
  username.value = '';
  password.value = '';
  email.value = '';

};

const submit = () => {

  

onMounted(async () => {
    const options = {
      method: "POST",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:8080/api/account/signin.php",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      data: data,
    };

    await axios
      .request(options)
      .then(function (response) {
        console.log(JSON.stringify(response));
        AuthStore.getUsername(response.account_name)
      })
      .catch(function (error) {
        console.error(error);
      });
  });


  AuthStore.toggleisAuthenticated();
  router.push({ name: "Home" });
  reset();
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
