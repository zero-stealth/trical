<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import kakashi from "../assets/kakashi.jpg";
import cartIcon from "../icons/cartIcon.vue";
import searchIcon from "../icons/searchIcon.vue";
import notification from "../icons/notification.vue";
</script>
<template>
  <div class="d-nav">
    <div class="logo">
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
        <div class="d-profile">
          <img :src="kakashi" alt="kakashi" class="d-profile-img" />
          <span>Kakashi</span>
        </div>
        <RouterLink class="d-cart" :to="{ name: 'cart' }">
          <cartIcon class="icon-d-cart" />
          <span>Cart</span>
        </RouterLink>
            <RouterLink class="d-notification" :to="{ name: 'notification' }">
          <notification class=" icon-d-notification" />
        </RouterLink>
      </div>
  </div>
</template>
<style>
@import "../style/desktopnav.css";
</style>
