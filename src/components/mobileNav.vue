<script setup>
import homeIcon from "@/icons/homeIcon.vue";
import cartIcon from "@/icons/cartIcon.vue";
import userIcon from "@/icons/userIcon.vue";
import searchIcon from "@/icons/searchIcon.vue";
import settingsIcon from "@/icons/settingsIcon.vue";
import { RouterLink } from "vue-router";
</script>
<template>
  <div class="mobile-nav-c">
    <div class="mobile-wrapper">
      <RouterLink :to="{ name: 'Search' }" class="mobile-link">
        <searchIcon class="mobile-nav-icon" />
        <span>search</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Cart' }" class="mobile-link">
        <cartIcon class="mobile-nav-icon" />
        <span>cart</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Home' }" class="mobile-link">
        <homeIcon class="mobile-nav-icon" />
        <span>home</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Account' }" class="mobile-link">
        <userIcon class="mobile-nav-icon" />
        <span>profile</span>
      </RouterLink>
      <RouterLink :to="{ name: 'Settings' }" class="mobile-link">
        <settingsIcon class="mobile-nav-icon" />
        <span>settings</span>
      </RouterLink>
    </div>
  </div>
</template>
<style>
@import "@/style/mobilenav.css";
</style>
