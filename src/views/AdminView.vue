<script setup>
import axios from "axios";
import { ref, computed, onMounted, watchEffect } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useProductStore } from "@/stores/product";

const AuthStore = useAuthStore();
const productStore = useProductStore();
const name = ref(null);
const price = ref(null);
const errorMsg = ref(null);
const description = ref(null);
const category = ref(null);
const imageData = ref(null);

const reset = () => {
  name.value = "";
  price.value = "";
  description.value = "";
  category.value = "";
};

const newID  = computed(() => {
    const data = productStore.productDetail
   return data.value.length + 1 
})

const uploadImage = (e) => {
  const input = e.target;
  if (input.files && input.files[0]) {
    var reader = new FileReader();
    reader.onload = (e) => {
      imageData.value = e.target.result;
    };
    reader.readAsDataURL(input.files[0]);
  }
};

const previousP = computed(() => {
   return price.value - 100
})

const submit = () => {
  if (
    (name.value != null,
    price.value != null &&
      description.value != null &&
      category_id.value != null &&
    imageData.value != null)
  ) {

    data = {
         id: newID.value,
        "productName": name.value,
        "currentPrice": price.value,
        "previousPrice":  previousP.value,
        "description": description.value,
        "category": category.value,
        "productImage": imageData,
    }

    ProductStore.updateProduct(data);

    // console.log(imageData.value);   
    const options = {
      method: "POST",
      url: "http://127.0.0.1:8080/api/product/create.php",
      headers: {
        "Content-Type": "application/json",
      },

      data: {
        name: name.value,
        price: price.value,
        image: imageData.value,
      },
      category_id: category_id,
      description: description.value,
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });

    
  } else {
    errorMsg.value = "no empty data dummy";
  }

  reset();
};
</script>
<template>
  <div class="admin-container">
    <div
      class="product-image"
      :style="{ backgroundImage: `url(${imageData})` }"
    ></div>
    <div class="product-info">
      <div class="upload-image">
        <input type="file" @change="uploadImage" accept="image/*" />
      </div>
      <form @click.prevent="submit()" class="form-ad">
        <div class="form-ia">
          <label for="" class="ia-acc">product name</label>
          <input
            type="text"
            v-model="name"
            placeholder="pipe"
            class="ia-input"
          />
        </div>
        <div class="form-ia">
          <label for="" class="ia-acc">price</label>
          <input
            type="text"
            v-model="price"
            placeholder="1000"
            class="ia-input"
          />
        </div>
        <div class="form-ia">
          <label for="" class="ia-acc">description</label>
          <input
            type="text"
            v-model="description"
            placeholder="durable pipe"
            class="ia-input"
          />
        </div>
        <div class="form-ia">
          <label for="" class="ia-acc">category</label>
          <input
            type="text"
            v-model="category"
            placeholder="pipe"
            class="ia-input"
          />
        </div>
        <div class="error-msg">
          <span>{{ errorMsg }}</span>
        </div>
        <button class="btn-acc-d" @click="submit()">Add Product</button>
      </form>
    </div>
  </div>
</template>
<style>
@import "@/style/accountDetail.css";
@import "@/style/admin.css";
</style>
