<script setup>
import { ref, watchEffect, computed } from "vue";
import cooker from "@/assets/cooker.png";
import addIcon from "@/icons/addIcon.vue";
import favIcon from "@/icons/favIcon.vue";
import cartIcon from "@/icons/cartIcon.vue";
import { useCartStore } from "@/stores/cart";
import minusIcon from "@/icons/minusIcon.vue";
import NavLink from "@/components/navlink.vue";
import { useProductStore } from "@/stores/product";
import DesktopNav from "@/components/desktopNav.vue";

const productStore = useProductStore();
const cartStore = useCartStore();
const noProduct = ref(1);
const phoneNumber = ref('0759636964');

const add = () => {
  noProduct.value++;
};

const minus = () => {
  if (noProduct.value >= 1) {
    noProduct.value -= 1;
  } else {
    noProduct.value = 1;
  }
};

const addCart = (id) => {
   id.value.push(cartStore.cartItem)
};

const data = productStore.productDetail

const detailData = computed(() => {
  return data.filter((d) => d.id.includes(1));
});


const buy = (name, price ) => {
    window.open(
      `https://wa.me/${phoneNumber.value}?text=
      *product name*: ${name}
      *mpesa number*: ${phoneNumber.value}
      *product price*: ${price}`,
      "_blank");

}


</script>
<template>
  <div class="d-contain">
    <div class="contain-nav">
      <DesktopNav class="desk-p-show" />
      <NavLink name="product details" class="mobile-p-show" />
    </div>
    <div class="detail-con">
      <div class="d-img">
        <img :src="cooker" alt="cooker" class="img-detail" />
      </div>
      <div class="d-info-p"        v-for="(
          { id, productImage, productinfo, category, productName, currentPrice, previousPrice }, index
        ) in detailData"
        :key="index">
        <div class="d-header" >
          <h1>{{ productName }}</h1>
          <favIcon class="fav-icon-d"  @click="cartStore.toggleLike()" />
        </div>
        <div class="d-info">
          <span>{{ category }}</span>
          {{ productinfo}}</div>
        <div class="product-detail-p">
          <div class="product-iv">
            <div class="p-p">
              <h1>{{ currentPrice }}</h1>
            </div>
            <div class="no-of-product">
              <div class="min-p" @click="minus()">
                <minusIcon class="add-icon-detail" />
              </div>
              <div class="no-p">
                {{ noProduct }} 
              </div>
              <div class="min-p add" @click="add()">
                <addIcon class="add-icon-detail" />
              </div>
            </div>
          </div>
          <div class="btn-mp">
            <button class="btn-p">
              <cartIcon class="cart-pd" @click="addCart(id)" /> add to cart <span>Ksh 44</span>
            </button>
          </div>
          <div class="btn-dp">
            <button class="btn-p">
              <cartIcon class="cart-pd" /> add to cart
            </button>
            <button class="btn-p" @click="buy(productName, currentPrice )">buy now</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
@import "@/style/detail.css";
</style>
