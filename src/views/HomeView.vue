<script setup>
import Deal from '../components/deal.vue';
import Category from '../components/category.vue';
import DesktopNav from '../components/desktopNav.vue';
import Slideshow from '../components/slideshow.vue';
</script>
<template>
    <div class="home-container">
        <DesktopNav/>
        <Slideshow />
        <Category/>
        <Deal/>
    </div>
</template>
<style>
@import "@/style/home.css";
</style>