<script setup>
import axios from "axios";
import { ref, computed, onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";

const AuthStore = useAuthStore();
const password = ref(null);
const username = ref(null);
const userID = ref(null);
const email = ref(null);
const errorMsg = ref();


const reset = () => {
  email.value = "";
  username.value = "";
  password.value = "";
};



onMounted(() => {
  const options = {
    method: "POST",
    url: "http://127.0.0.1:8080/api/account/read.php",
    headers: {
      "Content-Type": "application/json",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      //   console.log(response.data.body);
      response.data.body.forEach((element) => {
        // console.log(element)
        if (element.username == AuthStore.Username) {
          console.log(element.id);
          userID.value = element.id;
          AuthStore.getUserID(element.id)
        }
      });
    })
    .catch(function (error) {
      console.error(error);
    });
});


const placeholderEmail = computed(() => {
  return AuthStore.Username + "@gmail.com";
});

const submit = () => {
  if (
    username.value != "" &&
    userID.value != "" &&
    password.value != "" &&
    email.value != ""
  ) {
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8080/api/account/update.php    ",
      headers: {
        "Content-Type": "application/json",
      },
      data: {  username: username.value, password: password.value },
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
            errorMsg.value = response.data;
            break;
        }
      })
      .catch(function (error) {
        console.error(error);
        errorMsg.value = error;
      });

    reset();
  } else {
    errorMsg.value = "Write something dummy";
  }
};
</script>
<template>
  <form @click.prevent="submit()" class="form-ad">
    <div class="form-ia">
      <label for="" class="ia-acc">Username</label>
      <input
        type="text"
        v-model="username"
        :placeholder="AuthStore.Username"
        class="ia-input"
      />
    </div>
    <div class="form-ia">
      <label for="" class="ia-acc">Email</label>
      <input
        type="text"
        v-model="email"
        :placeholder="placeholderEmail"
        class="ia-input"
      />
    </div>
    <div class="form-ia">
      <label for="" class="ia-acc">Password</label>
      <input
        type="password"
        v-model="password"
        placeholder="********"
        class="ia-input"
      />
    </div>
    <div class="error-msg">
      <span>{{ errorMsg }}</span>
    </div>
    <button class="btn-acc-d">update</button>
  </form>
</template>
<style>
@import "@/style/accountDetail.css";
</style>
