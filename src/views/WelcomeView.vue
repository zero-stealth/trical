<script setup>
import show1 from "@/assets/show1.png";
import show2 from "@/assets/show2.png";
import show3 from "@/assets/show3.png";
import { useRouter } from "vue-router";
import Drawer from "@/components/drawer.vue";
import { useAuthStore } from "@/stores/auth";
import ForgotPage from "@/components/reset.vue";
import logInPage from "@/components/login.vue";
import signInPage from "@/components/signin.vue";
import { useDrawerStore } from "@/stores/drawer";
import { ref, shallowRef, watchEffect } from "vue";

const AuthStore = useAuthStore();
const DrawerStore = useDrawerStore();

let images = ref([]);
const authPage = ref(null);
const router = useRouter();
const resetPage = ref(null);
const drawerStatus = ref(null);
const defaultImage = ref(show1);
const isAuthenticated = ref(null)
const defaultPage = shallowRef(signInPage);

watchEffect(() => {
  isAuthenticated.value = AuthStore.isAuthenticated;
  drawerStatus.value = DrawerStore.isDrawerOpen;
  resetPage.value = AuthStore.resetPage;
  authPage.value = AuthStore.authPage;

  if (isAuthenticated.value == false) {
    switch (authPage.value) {
    case true:
    defaultPage.value = logInPage;
      break;
      case false:
    defaultPage.value = signInPage;
      break;
    default:
      break;
  }

  switch (resetPage.value ) {
    case true:
    defaultPage.value = ForgotPage;
      break;
    default:
      break;
  }
  } else {
  router.push({ name: "Home" });
  }

});

// change background image every 5 sec
images = [
  {
    image: show1,
  },
  {
    image: show2,
  },
  {
    image: show3,
  },
];

setInterval(() => {
  defaultImage.value = images[Math.floor(Math.random() * images.length)].image;
}, 5000);

const setSignIn = () => {
  DrawerStore.toggleDrawer();
};
</script>
<template>
  <div class="welcome-container">
    <div
      class="welcome-wrapper"
      :style="{ backgroundImage: `url(${defaultImage})` }"
    >
      <div class="mobile-show">
        <div class="ads-txt">
          <h1>Your number one electronic solution</h1>
        </div>
        <div class="welcome-btn-container">
          <button class="welcome-btn" @click="setSignIn">Get started</button>
        </div>
      </div>
    </div>
    <div class="auth-wrapper">
      <component :is="defaultPage" />
    </div>
  </div>
  <Drawer class="pop-w" :class="[drawerStatus == true ? 'open' : 'close']">
    <component :is="defaultPage" />
  </Drawer>
</template>
<style>
@import "@/style/welcome.css";
</style>
