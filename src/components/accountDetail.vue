<script setup>
import { ref } from "vue";

const password = ref(null);
const username = ref(null);
const phone = ref(null);
const email = ref(null);

const submit = () => {

}

const reset = () => {
    phone.value = "";
    email.value = "";
  password.value = "";
  password.value = "";
};

const data = JSON.stringify({
  "username": username,
  "password": password,
  "email": email,
  "phone": phone,
});


</script>
<template>
    <form @click.prevent="submit()" class="form-ad">
        <div class="form-ia">
            <label for="" class="ia-acc">Username</label>
            <input type="text" v-model="username" placeholder="kakashi" class="ia-input">
        </div>
        <div class="form-ia">
            <label for="" class="ia-acc">Phone</label>
            <input type="text" v-model="phone" placeholder="07000000" class="ia-input">
        </div>
        <div class="form-ia">
            <label for="" class="ia-acc">Password</label>
            <input type="password" v-model="password" placeholder="********" class="ia-input">
        </div>
        <button class="btn-acc-d">
            update
        </button>
    </form>
</template>
<style>
@import "@/style/accountDetail.css";
</style>