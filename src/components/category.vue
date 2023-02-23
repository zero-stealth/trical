<script setup>
import computerIcon from "../icons/computerIcon.vue";
import appliancesIcon from "../icons/appliancesIcon.vue";
import phoneIcon from "../icons/phoneIcon.vue";
import circle from "./circle.vue";
import {ref} from "vue"
const data = ref([
    {
        icon : computerIcon,
        categoryName : "Gadget",
        description: "High specs gadget",
    },
    {
        icon : appliancesIcon,
        categoryName : "Appliances",
        description: "Best for home use",
    },
    {
        icon : phoneIcon,
        categoryName : "Phones",
        description: "Latest smart phones",
    },
])
</script>
<template>
  <div class="category-c">
    <div class="category-title">
        <h1>Shop our top category</h1>
    </div>
    <div class="category-wrapper">
        <div class="category-component" v-for="({icon, categoryName,description}, index) in data" :key="index">
            <circle>
    <vue-html>{{icon}}</vue-html>

            </circle>
            <div class="c-c-info">
            <h1>{{ description }}</h1>
            <span>{{ categoryName }}</span>
            </div>
        </div>
    </div>
  </div>
</template>
<style>
@import "@/style/span.css";
</style>
