<script setup>
import Category from './category.vue';
import DesktopNav from './desktopNav.vue';
import MobileNav from './mobileNav.vue';
import Slideshow from './slideshow.vue';
</script>
<template>
    <div class="home-container">
        <DesktopNav/>
        <Slideshow />
        <Category/>
    </div>
</template>
<style>
@import "@/style/home.css";
</style>