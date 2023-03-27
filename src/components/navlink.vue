<script setup>
import { useRouter } from "vue-router";
import CartIcon from "@/icons/cartIcon.vue";
import BackIcon from "@/icons/backIcon.vue";

const router = useRouter();

const goHome = () => {
  router.push({ name : 'Home'})

}

const goCart = () => {
  router.push({ name : 'Cart'})

}

const props = defineProps({
    name: String,
});
</script>
<template>
    <div class="navlink-container"> 
        <div class="link-circle">
            <BackIcon class="icon-back" @click="goHome()" />
        </div>
        <div class="link-info">
           <h3> {{ props.name }}</h3>
        </div>
        <div class="link-circle">
            <CartIcon class="icon-link-cart" @click="goCart()"/>
        </div>
    </div>
</template>
<style>
@import '@/style/navlink.css';
</style>
