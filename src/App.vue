<script setup>
import { RouterView } from 'vue-router'
import MobileNav from '@/components/mobileNav.vue';

</script>
<template>
  <div class="app-x">
    <RouterView />
    <MobileNav/>    
  </div>
</template>
<style>
@import "./style/app.css";
</style>
