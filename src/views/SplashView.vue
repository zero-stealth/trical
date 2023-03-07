<script setup>
import { watchEffect, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "@/stores/auth";

const authStore = useAuthStore();
const router = useRouter();
const interval = ref(null);


watchEffect(() => {
  interval.value = authStore.timeOut;
  switch (interval.value) {
    case 3000:
      setTimeout(() => {
        router.push({ name: "Welcome" });
      }, interval.value);
      console.log(interval.value)
      break;
      case 0:
        router.push({ name: "Welcome" });
      break;
    default:
      break;
  }
});

</script>
<template>
  <div class="splash">
    <h1>Trical</h1>
  </div>
</template>
<style>
@import "@/style/splash.css";
</style>
