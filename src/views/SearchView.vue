<script setup>
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import kakashi from "@/assets/kakashi.jpg";
import cartIcon from "@/icons/cartIcon.vue";
import searchIcon from "@/icons/searchIcon.vue";
import filterIcon from "@/icons/filterIcon.vue";

const router = useRouter();

const showProfile = () => {
  router.push({ name : 'Account'})
}

const filterAll = () => {

}

</script>
<template>
  <div class="filter-nav">
    <div class="f-wrapper">
      <div class="filter-circle" @click="filterAll()">
        <filterIcon class="icon-filter" />
      </div>
      <div class="f-input-container">
        <searchIcon class="icon icon-f-search" />
        <input
          type="text"
          class="search-f"
          v-model="search"
          placeholder="Search for product"
        />
      </div>
      <div class="f-categories">
     <select name="" id="" class="f-category">
        <option value="">category</option>
     </select>
     <div class="latest" @click="latest()">
        latest products
     </div>
      </div>
      <div class="f-profile " @click="showProfile()">
        <img :src="kakashi" alt="kakashi" class="d-profile-img" />
        <span>Kakashi</span>
      </div>
      <RouterLink class="d-cart" :to="{ name: 'Cart' }">
        <cartIcon class="icon-d-cart" />
        <span>Cart</span>
      </RouterLink>
      <RouterLink class="d-notification" :to="{ name: 'Notification' }">
        <notification class="icon-d-notification" />
      </RouterLink>
    </div>
  </div>
</template>
<style>
@import "@/style/desktopnav.css";
@import "@/style/search.css";
</style>
