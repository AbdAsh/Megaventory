<template>
  <div class="container box">
    <div class="tile is-justify-content-space-between">
      <label class="title"> Discounts </label>
      <button class="button">Add Discount</button>
    </div>
    <div class="columns">
      <label class="column is-one-fifth"> ID </label>
      <label class="column is-one-fifth"> Name </label>
      <label class="column"> Description </label>
      <label class="column is-one-fifth"> Value </label>
    </div>
    <div class="columns" v-for="(discount, i) in discounts" :key="i">
      <label class="column is-one-fifth"> {{ discount.DiscountID }}</label>
      <label class="column is-one-fifth"> {{ discount.DiscountName }}</label>
      <label class="column"> {{ discount.DiscountDescription }}</label>
      <label class="column is-one-fifth"> {{ discount.DiscountValue }}</label>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Discounts",
  data() {
    return { discounts: [] };
  },
  created() {
    this.getDiscounts();
  },
  methods: {
    getDiscounts() {
      axios
        .get(`/Discount/DiscountGet?APIKEY=${this.$store.state.APIKEY}`)
        .then((response) => {
          this.discounts = response.data.mvDiscounts;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
