<script setup>
import axios from "axios";
import { ref, computed } from "vue";
import show1 from "@/assets/show1.png";
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import kakashi from "../assets/kakashi.jpg";
import cartIcon from "../icons/cartIcon.vue";
import backIcon from "../icons/backIcon.vue";
import { useAuthStore } from "@/stores/auth";
import searchIcon from "../icons/searchIcon.vue";
import notification from "../icons/notification.vue";
import AccountDetail from "../components/accountDetail.vue";

let images = ref([]);
const router = useRouter();
const AuthStore = useAuthStore();

const showProfile = () => {
  router.push({ name: "Account" });
};

const goHome = () => {
  router.push({ name: "Home" });
};

const welcome = () => {
  router.push({ name: "Welcome" });
  AuthStore.toggleisAuthenticated();
  AuthStore.getUsername(null);
};

const goSettings = () => {
  router.push({ name: "Settings" });
};

const placeholderEmail = computed(() => {
  return AuthStore.Username + "@gmail.com";
});

const deleteAccount = () => {
  const options = {
    method: "GET",
    url: "http://127.0.0.1:8080/api/account/delete.php",
    headers: {
      "Content-Type": "application/json",
    },
    data: { id: AuthStore.userId },
  };

  console.log(AuthStore.userId)
  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      switch (response.data) {
        case "Account deleted successfully":
          router.push({ name: "Welcome" });
          AuthStore.toggleisAuthenticated();
          AuthStore.getUsername(null);
          break;
          case "Account not deleted successfully":
        default:
          break;
      }
    })
    .catch(function (error) {
      console.error(error);
    });
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
          <span>{{ AuthStore.Username }}</span>
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
            <span>{{ AuthStore.Username }}</span>
          </div>
          <div class="details-u">
            <h3>Email</h3>
            <span>{{ placeholderEmail }}</span>
          </div>
          <div class="details-u">
            <h3>Password</h3>
            <span>********</span>
          </div>
          <div class="details-u">
            <h3>Payment Details</h3>
            <span>Mpesa</span>
          </div>
          <span class="acc-delete" @click="deleteAccount()">
            delete account</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/desktopnav.css";
</style>
