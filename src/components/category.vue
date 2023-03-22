<script setup>
import computerIcon from "../icons/computerIcon.vue";
import switchIcon from "../icons/switchIcon.vue";
import phoneIcon from "../icons/phoneIcon.vue";
import pipeIcon from "../icons/pipeIcon.vue";
import cableIcon from "../icons/cableIcon.vue";
import { ref } from "vue";
const data = ref([
  {
    categoryName: "Phones",
    description: "Latest smart phones",
  },
  {
    categoryName: "Pipe",
    description: "durable pipes",
  },
  {
    categoryName: "Switch",
    description: "Affordable switches",
  },
  {
    categoryName: "Cable",
    description: "Strong fast cable for wiring",
  },
  {
    categoryName: "Gadget",
    description: "High specs gadget",
  },
]);
</script>
<template>
  <div class="category-c">
    <div class="category-title">
      <h1>Shop our top category</h1>
    </div>
    <div class="category-wrapper">
      <div
        class="category-component"
        v-for="({ categoryName, description }, index) in data"
        :key="index"
      >
        <div class="circle-ca">
          <computerIcon class="icon-c" v-if="categoryName == 'Gadget'" />
          <switchIcon class="icon-c" v-else-if="categoryName == 'Pipe'" />
          <pipeIcon class="icon-c" v-else-if="categoryName == 'Switch'" />
          <cableIcon class="icon-c" v-else-if="categoryName == 'Cable'" />
          <phoneIcon class="icon-c" v-else />
        </div>
        <div class="c-c-info">
          <h1>{{ description }}</h1>
          <span class="span">{{ categoryName }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/span.css";
</style>
