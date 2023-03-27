<script setup>
import { ref } from "vue";
import show1 from "@/assets/show1.png";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import kakashi from "../assets/kakashi.jpg";
import cartIcon from "../icons/cartIcon.vue";
import backIcon from "../icons/backIcon.vue";
import searchIcon from "../icons/searchIcon.vue";
import notification from "../icons/notification.vue";
import AccountDetail from "../components/accountDetail.vue";

let images = ref([]);
const router = useRouter();

const showProfile = () => {
  router.push({ name: "Account" });
};

const goHome = () => {
  router.push({ name: "Home" });
};

const welcome = () => {
  router.push({ name: "Welcome" });
};

const goSettings = () => {
  router.push({ name: "Settings" });
};
</script>
<template>
  <div class="account-controller">
    <div class="d-nav">
      <div class="account-nav">
        <a class="acc-nav" href="#" @click="showProfile()"> My Account </a>
        <a class="acc-nav" href="#"> Help & Support </a>
        <a class="acc-nav" href="#" @click="showProfile()"> Settings </a>
        <a class="acc-nav" href="#" @click="welcome()"> Logout </a>
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
    <div class="profile-avv" :style="{ backgroundImage: `url(${show1})` }">
      <backIcon class="icon-acc-back" @click="goHome()" />
    </div>
    <div class="acc-mps">
      <AccountDetail />
    </div>
    <div class="acc-pc">
      <div class="acc-detail">
        <AccountDetail />
      </div>
      <div class="acc-settings">
        <h1>
          Your <br />
          Personal information
        </h1>
        <div class="user-details">
          <div class="details-u">
            <h3>Username</h3>
            <span>name</span>
          </div>
          <div class="details-u">
            <h3>Phone</h3>
            <span>name</span>
          </div>
          <div class="details-u">
            <h3>Password</h3>
            <span>name</span>
          </div>
          <div class="details-u">
            <h3>Payment Details</h3>
            <span>name</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/desktopnav.css";
</style>
