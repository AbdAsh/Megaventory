<template>
  <div class="container box">
    <div class="title">Insert Discount</div>
    <form @submit.prevent="addDiscount">
      <div class="field">
        <label class="label has-text-left">Name</label>
        <input class="input" type="text" v-model="discount.DiscountName" />
        &nbsp;
        <label class="label has-text-left">Description</label>
        <input
          class="input"
          type="text"
          v-model="discount.DiscountDescription"
        />
        &nbsp;
        <label class="label has-text-left">Value</label>
        <input
          class="input"
          type="number"
          step="any"
          v-model="discount.DiscountValue"
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
      discount: {
        DiscountName: "",
        DiscountDescription: "",
        DiscountValue: "",
      },
    };
  },
  computed: {
    error() {
      if (
        this.discount.DiscountName &&
        this.discount.DiscountDescription &&
        this.discount.DiscountValue
      ) {
        return false;
      } else {
        return "Please fill out all fields";
      }
    },
  },
  methods: {
    addDiscount() {
      this.loading = true;
      this.$store
        .dispatch("insertDiscount", this.discount)
        .then(() => {
          this.loading = false;
          this.discount = {
            DiscountName: "",
            DiscountDescription: "",
            DiscountValue: "",
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
