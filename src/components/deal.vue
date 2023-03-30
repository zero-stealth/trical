<script setup>
import wiring from "../assets/wiring.png";
import cooker from "../assets/cooker.png";
import addIcon from "../icons/addIcon.vue";
import favIcon from "../icons/favIcon.vue";

import { ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useProductStore } from "@/stores/product";


const productStore = useProductStore();
const cartStore = useCartStore();
const addItem = ref(false);
const router = useRouter();

const showAll = () => {
  router.push({ name: "Search" });
};

watchEffect(() => {
  addItem.value = cartStore.add;
});

const goDetail = (id) => {
  productStore.productID = id;
  router.push({ name : "Details"})
}

const data = productStore.productDetail
console.log(data.value)

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
          { id, productImage, productName, currentPrice, previousPrice }, index
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
          <div class="card-circle add-c" @click="goDetail(id)">
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
