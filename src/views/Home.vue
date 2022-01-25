<template>
  <div class="home">
    <!-- <InsertProduct /> -->
    <!-- <InsertClient /> -->
    <!-- <InsertInventoryLocation /> -->
    <InsertTax />
  </div>
</template>

<script>
// import InsertProduct from "@/components/InsertProduct.vue";
// import InsertClient from "@/components/InsertClient.vue";
// import InsertInventoryLocation from "@/components/InsertInventoryLocation.vue";
import InsertTax from "../components/InsertTax.vue";
export default {
  name: "Home",
  components: {
    // InsertProduct,
    // InsertClient,
    // InsertInventoryLocation,
    InsertTax,
  },
};
</script>
