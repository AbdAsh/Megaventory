<template>
  <div class="container box">
    <div class="title">Insert Product</div>
    <form @submit.prevent="addProduct">
      <div class="field">
        <label class="label has-text-left">SKU</label>
        <input class="input" type="text" v-model="product.ProductSKU" />
        &nbsp;
        <label class="label has-text-left">Description</label>
        <input class="input" type="text" v-model="product.ProductDescription" />
        &nbsp;
        <label class="label has-text-left">Sales Price</label>
        <input
          class="input"
          type="number"
          v-model="product.ProductSellingPrice"
        />
        &nbsp;
        <label class="label has-text-left">Purchase Price</label>
        <input
          class="input"
          type="number"
          v-model="product.ProductPurchasePrice"
        />
      </div>
      <p v-if="error" class="help is-danger">{{ error }}</p>
      <div class="control">
        <button type="submit" :disabled="error" class="button is-link">
          Submit
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      product: {
        ProductSKU: "",
        ProductDescription: "",
        ProductSellingPrice: "",
        ProductPurchasePrice: "",
      },
    };
  },
  computed: {
    error() {
      if (
        this.product.ProductSKU &&
        this.product.ProductDescription &&
        this.product.ProductSellingPrice &&
        this.product.ProductPurchasePrice
      ) {
        return false;
      } else {
        return "Please fill out all fields";
      }
    },
  },
  methods: {
    addProduct() {
      this.loading = true;
      this.$store
        .dispatch("insertProduct", this.product)
        .then(() => {
          this.loading = false;
          this.product = {
            ProductSKU: "",
            ProductDescription: "",
            ProductSellingPrice: "",
            ProductPurchasePrice: "",
          };
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
};
</script>
