<script setup>
import { useRouter } from "vue-router";
import BackIcon from "@/icons/backIcon.vue";

const router = useRouter();

const goAccount = () => {
  router.push({ name: "Account" });
};

const goHome = () => {
  router.push({ name: "Home" });
};

const logout = () => {
  router.push({ name: "Welcome" });
};
</script>
<template>
  <div class="contain-settings">
    <div class="settings-desk">
      <h1>Go to mobile dummy 🚉</h1>
    </div>
    <div class="settings-mobile">
      <div class="setting-nav">
        <BackIcon class="icon-s-b back-s-nav"  @click="goHome()" />
        <h2>Settings</h2>
      </div>
      <div class="setting-main-nav">
        <div class="s-n-container" @click="goAccount()">
          <h4>My account</h4>
          <BackIcon class="icon-s-b" />
        </div>
        <div class="s-n-container">
          <h4>Help & support</h4>
          <BackIcon class="icon-s-b" />
        </div>
        <div class="s-n-container" @click="logout()">
          <h4>log out</h4>
          <BackIcon class="icon-s-b" />
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/settings.css";
</style>
