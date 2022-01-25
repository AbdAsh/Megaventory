<template>
  <div class="container box">
    <i v-if="loading" class="gg-spinner"></i>
    <div v-else>
      <div class="tile is-justify-content-space-between">
        <label class="title"> Products </label>
        <button class="button">Add Product</button>
      </div>
      <div class="columns">
        <label class="column is-one-fifth"> ID </label>
        <label class="column is-one-fifth"> SKU </label>
        <label class="column"> Description </label>
      </div>
      <div class="columns" v-for="(product, i) in products" :key="i">
        <label class="column is-one-fifth"> {{ product.ProductID }}</label>
        <label class="column is-one-fifth"> {{ product.ProductSKU }}</label>
        <label class="column"> {{ product.ProductDescription }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Products",
  data() {
    return { products: [], loading: false };
  },
  created() {
    this.getProducts();
  },
  methods: {
    getProducts() {
      this.loading = true;
      axios
        .get(`Product/ProductGet?APIKEY=${this.$store.state.APIKEY}`)
        .then((response) => {
          this.loading = false;
          this.products = response.data.mvProducts;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
