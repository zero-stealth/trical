<script setup>
import home from "@/components/home.vue"
import splash from "@/components/splash.vue"
import welcome from "@/components/welcome.vue"
import { ref, shallowRef, watchEffect } from "vue"
import { useAuthStore } from "@/stores/auth";

const auth = ref(false);
const AuthStore = useAuthStore();
const current = shallowRef(splash);

watchEffect(() => {
  auth.value = AuthStore.isAuthenticated;

  switch (auth.value) {
    case true:
      current.value = home;
      break;
    case false:
      setTimeout(() => {
        current.value = welcome;
      }, 5000)
      break;
    default:
      break;
  }
})


</script>
<template>
  <div class="home">
    <component :is="current" />
</div>
</template>
<style>@import "@/style/home.css";</style>