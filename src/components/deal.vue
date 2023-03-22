<script setup>
import wiring from "../assets/wiring.png";
import cooker from "../assets/cooker.png";
import addIcon from "../icons/addIcon.vue";
import favIcon from "../icons/favIcon.vue";

import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const addItem = ref(false);
const router = useRouter();

const showAll = () => {
  router.push({ name: "Search" });
};

watchEffect(() => {
  addItem.value = cartStore.add;
});

const data = ref([
  {
    category: "Cable",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
  {
    category: "Gadget",
    productImage: cooker,
    productName: "Wiring wire",
    currentPrice: "Ksh 20,000",
    previousPrice: "Ksh 30,000",
  },
  {
    category: "Gadget",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
  {
    category: "Cable",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
]);
</script>
<template>
  <div class="deal-container">
    <div class="deal-title">
      <h1>Hottest deal</h1>
      <span @click="showAll">show all</span>
    </div>
    <div class="deal-wrapper">
      <div
        class="card-template"
        v-for="(
          { productImage, productName, currentPrice, previousPrice }, index
        ) in data"
        :key="index"
      >
        <div class="card-bg">
          <div class="like-container">
            <div class="card-circle" @click="cartStore.toggleLike()">
              <favIcon class="fav-icon" />
            </div>
          </div>
          <div class="img-component">
            <img :src="productImage" alt="" class="product-image" />
          </div>
        </div>
        <div class="card-c-info">
          <div class="card-info">
            <div class="info-price">
              <h1>{{ currentPrice }}</h1>
              <h3>{{ previousPrice }}</h3>
            </div>
            <h1>{{ productName }}</h1>
          </div>
          <div class="card-circle add-c">
            <addIcon class="add-icon" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/deal.css";
</style>
