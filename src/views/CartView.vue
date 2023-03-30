<script setup>
import { computed } from 'vue'
import DesktopNav from "../components/desktopNav.vue";
import NavLink from "../components/navlink.vue";
import CardIcon from "../icons/cardIcon.vue";
import cooker from "@/assets/cooker.png";
import { useProductStore } from "@/stores/product";

const checkout = () => {};
const productStore = useProductStore();

const tax = 100
const data = productStore.productDetail
console.log(productStore.productID)

const cartData = computed(() => {
  return data.filter((d) => d.id.includes(productStore.productID));
});

</script>
<template>
  <div class="cart-container">
    <DesktopNav class="desk-show" />
    <NavLink name="cart" class="mobile-show" />
    <div class="cart-layout">
      <div class="layout-first">
        <div class="mpesa-m">
          <CardIcon class="icon-card" />
        </div>
        <div class="transaction-card">
          <h2>Transaction history</h2>
          <div class="tran-cart">
            <div class="lay-cart">
              <div class="card-cart-s">
                <div class="card-info">
                  <h4>smart p</h4>
                  <span>quantity 1</span>
                  <span>price</span>
                </div>
                <div class="cart-card-img">
                  <img :src="cooker" alt="cooker" class="img-cart" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="layout-second">
        <h2>Cart Item</h2>
        <div class="lay-cart second-cart"
        v-for="(
          {  productImage, productName, currentPrice }, index
        ) in cartData"
        :key="index">
          <div class="card-cart-s">
            <div class="card-info">
              <h4>{{productName}}</h4>
              <span> 1</span>
              <span>{{currentPrice}}</span>
            </div>
            <div class="cart-card-img">
              <img :src="productImage" :alt="productName" class="img-cart" />
            </div>
          </div>
        </div>
        <div class="cost-oc inside-oc">
          <div class="item-cost">
            <div class="item-x">
              <h3>Tax</h3>
            <h3>{{ tax }}</h3>
            </div>
            <div class="item-x">
              <h3>Total</h3>
              <h3>ksh {{ currentPrice}}</h3>
            </div>
          </div>
          <button type="submit" class="btn-cart-a" @click="checkout()">checkout</button>
        </div>
      </div>
    </div>
  </div>
  <div class="cost-oc outside-oc">
    <div class="item-cost">
      <div class="item-x">
        <h3>Tax</h3>
        <h3>Ksh 111</h3>
      </div>
      <div class="item-x">
        <h3>Total</h3>
        <h3>Ksh 111</h3>
      </div>
    </div>
    <button type="submit" class="btn-cart-a" @click="checkout()">checkout</button>
  </div>
</template>
<style>
@import "@/style/cart.css";
</style>
