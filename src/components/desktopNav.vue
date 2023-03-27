<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import kakashi from "../assets/kakashi.jpg";
import cartIcon from "../icons/cartIcon.vue";
import searchIcon from "../icons/searchIcon.vue";
import notification from "../icons/notification.vue";

const router = useRouter();
const AuthStore = useAuthStore();


const showProfile = () => {
  router.push({ name : 'Account'})
}

const goHome = () => {
  router.push({ name : 'Home'})
}


const goCart = () => {
  router.push({ name : 'Cart'})
}

const goNotification = () => {
  router.push({ name : 'Notification'})
}



</script>
<template>
  <div class="d-nav">
    <div class="logo" @click="goHome()">
      <h1>Trical</h1>
    </div>
    <div class="d-wrapper">
      <div class="d-input-container">
        <searchIcon class="icon icon-d-search" />
        <input
          type="text"
          class="search-d"
          v-model="search"
          placeholder="Search for product"
        />
      </div>
      <div class="d-profile" @click="showProfile()">
        <img :src="kakashi" alt="kakashi" class="d-profile-img" />
        <span>{{ AuthStore.Username }}</span>
      </div>
      <a class="d-cart" @click="goCart()">
        <cartIcon class="icon-d-cart" />
        <span>Cart</span>
      </a>
      <a class="d-notification" @click="goNotification()">
        <notification class="icon-d-notification" />
      </a>
    </div>
  </div>
</template>
<style>
@import "../style/desktopnav.css";
</style>
