<script setup>
import { useRouter } from "vue-router";
import { RouterLink } from "vue-router";
import kakashi from "@/assets/kakashi.jpg";
import { useCartStore } from "@/stores/cart";
import cartIcon from "@/icons/cartIcon.vue";
import searchIcon from "@/icons/searchIcon.vue";
import filterIcon from "@/icons/filterIcon.vue";
import wiring from "@/assets/wiring.png";
import cooker from "@/assets/cooker.png";
import addIcon from "@/icons/addIcon.vue";
import favIcon from "@/icons/favIcon.vue";
import MobileNav from "@/components/mobileNav.vue";
import { useProductStore } from "@/stores/product";

import { ref, watchEffect , computed} from "vue";

const cartStore = useCartStore();
const productStore = useProductStore();

const addItem = ref(false);
const search = ref(null);

const router = useRouter();

const showProfile = () => {
  router.push({ name: "Account" });
};

const goHome = () => {
  router.push({ name: "Home" });
};

watchEffect(() => {
  addItem.value = cartStore.add;
});

const searchData = computed(() => {
      return productStore.productDetail.filter((d) => d.productName.includes(search.value));
    });
</script>
<template>
  <div class="filter-nav">
    <div class="f-wrapper">
      <div class="filter-circle d-fc" @click="goHome()">
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
        <div class="latest" @click="latest()">latest products</div>
      </div>
      <div class="f-profile" @click="showProfile()">
        <img :src="kakashi" alt="kakashi" class="d-profile-img" />
        <span>Kakashi</span>
      </div>
      <RouterLink class="d-cart" :to="{ name: 'Cart' }">
        <cartIcon class="icon-d-cart" />
        <span>Cart</span>
      </RouterLink>
      <div class="filter-circle m-fc" @click="filterAll()">
        <filterIcon class="icon-filter" />
      </div>
    </div>
  </div>
  <div class="product-wrapper">
    <div class="deal-wrapper">
      <div
        class="card-template"
        v-for="(
          { productImage, productName, currentPrice, previousPrice }, index
        ) in searchData"
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
  <MobileNav />
</template>
<style>
@import "@/style/desktopnav.css";
@import "@/style/search.css";
@import "@/style/deal.css";
</style>
