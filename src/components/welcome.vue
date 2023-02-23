<script setup>
import Drawer from "./drawer.vue";
import logInPage from "./login.vue";
import signInPage from "./signin.vue";
import show1 from "@/assets/show1.png";
import show2 from "@/assets/show2.png";
import show3 from "@/assets/show3.png";
import { useAuthStore } from "@/stores/auth";
import resetPage from "./resetPassword.vue";
import { useDrawerStore } from "@/stores/drawer";
import { ref, shallowRef, watchEffect } from "vue";

const AuthStore = useAuthStore();
const DrawerStore = useDrawerStore();

let images = ref([]);
const login = ref(false);
const reset = ref(false)
const drawerStatus = ref(false);
const defaultImage = ref(show1);
const defaultPage = shallowRef(signInPage);

watchEffect(() => {
    drawerStatus.value = DrawerStore.isDrawerOpen;
    reset.value = AuthStore.resetAccount;
    login.value = AuthStore.isLogIn;
    console.log(AuthStore.isLogIn)

    switch (login.value) {
        case true:
            defaultPage.value = logInPage;
            break;
        case false:
            defaultPage.value = signInPage;
            break;
        default:
            break;  
    }    
    
    switch (reset.value) {
        case true:
            defaultPage.value = resetPage;
            break;
        default:
            break;  
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
        <div class="welcome-wrapper" :style="{ backgroundImage: `url(${defaultImage})` }">
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
<style>@import "@/style/welcome.css";</style>
