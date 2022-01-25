<template>
  <div class="container box">
    <div class="title">Insert Tax</div>
    <form @submit.prevent="addTax">
      <div class="field">
        <label class="label has-text-left">Name</label>
        <input class="input" type="text" v-model="tax.TaxName" />
        &nbsp;
        <label class="label has-text-left">Description</label>
        <input class="input" type="text" v-model="tax.TaxDescription" />
        &nbsp;
        <label class="label has-text-left">Value</label>
        <input class="input" type="number" v-model="tax.TaxValue" />
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
      tax: {
        TaxName: "",
        TaxDescription: "",
        TaxValue: "",
      },
    };
  },
  computed: {
    error() {
      if (this.tax.TaxName && this.tax.TaxDescription && this.tax.TaxValue) {
        return false;
      } else {
        return "Please fill out all fields";
      }
    },
  },
  methods: {
    addTax() {
      this.loading = true;
      this.$store
        .dispatch("insertTax", this.tax)
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
