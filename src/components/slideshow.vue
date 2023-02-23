<script setup>
import Ads from "@/assets/ads.png";
import Hardware from "@/assets/Hardware.png";
import show3 from "@/assets/show3.png";
</script>
<template>
  <div class="side-show">
    <div class="slide-big">
      <div class="big-info">
        <div class="span-slide">latest</div>
        <h1>Iphone 13</h1>
        <h2>cheap for you</h2>
        <button class="big-btn">Buy now!</button>
      </div>
      <div
        class="slide-big-img"
        :style="{ backgroundImage: `url(${Ads})` }"
      ></div>
    </div>
    <div class="slide-wapper">
      <div class="slide-a" :style="{ backgroundImage: `url(${Hardware})` }">
        <h1>Latest Hardware</h1>
      </div>
      <div class="slide-a" :style="{ backgroundImage: `url(${show3})` }">
        <h1>Energy Saver batteries</h1>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/slideshow.css";
</style>
