<template>
  <div class="home">
    <!-- <InsertProduct /> -->
    <InsertClient />
  </div>
</template>

<script>
// import InsertProduct from "@/components/InsertProduct.vue";
import InsertClient from "@/components/InsertClient.vue";
export default {
  name: "Home",
  components: {
    // InsertProduct,
    InsertClient,
  },
};
</script>
