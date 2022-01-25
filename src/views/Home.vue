<template>
  <div class="home">
    <!-- <InsertProduct /> -->
    <!-- <InsertClient /> -->
    <!-- <InsertInventoryLocation /> -->
    <!-- <InsertTax /> -->
    <InsertDiscount />
  </div>
</template>

<script>
// import InsertProduct from "@/components/InsertProduct.vue";
// import InsertClient from "@/components/InsertClient.vue";
// import InsertInventoryLocation from "@/components/InsertInventoryLocation.vue";
// import InsertTax from "@/components/InsertTax.vue";
import InsertDiscount from "@/components/InsertDiscount.vue";
export default {
  name: "Home",
  components: {
    // InsertProduct,
    // InsertClient,
    // InsertInventoryLocation,
    // InsertTax,
    InsertDiscount,
  },
};
</script>
