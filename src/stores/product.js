import { ref } from 'vue'
import { defineStore } from 'pinia'
import wiring from "@/assets/wiring.png";
import cooker from "@/assets/cooker.png";
import addIcon from "@/icons/addIcon.vue";
import favIcon from "@/icons/favIcon.vue";

export const useProductStore = defineStore('product', () => {

const productID = ref(null);
const productDetail = ref([
  {
    id: '1',
    category: "Cable",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
  {
    id: '2',
    category: "Gadget",
    productImage: cooker,
    productName: "Wiring wire",
    currentPrice: "Ksh 20,000",
    previousPrice: "Ksh 30,000",
  },
  {
    id: '3',
    category: "Gadget",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
  {
    id: '4',
    category: "Cable",
    productImage: wiring,
    productName: "4mm cable",
    currentPrice: "Ksh 30,000",
    previousPrice: "Ksh 45,000",
  },
]);


const updateProduct = (data) => {
  productDetail.value.push(data);
}
 
  return { productID , updateProduct , productDetail }
})
