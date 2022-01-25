<template>
  <div class="container box">
    <i v-if="loading" class="gg-spinner"></i>
    <div v-else>
      <div class="tile is-justify-content-space-between">
        <label class="title"> Discounts </label>
        <button
          @click.prevent="formOpen = !formOpen"
          class="button"
          :class="formOpen ? 'is-danger' : 'is-success'"
        >
          Add Discount
        </button>
      </div>
      <InsertDiscount v-if="formOpen" />
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
  </div>
</template>

<script>
import axios from "axios";
import InsertDiscount from "@/components/InsertDiscount.vue";
export default {
  name: "Discounts",
  data() {
    return { discounts: [], loading: false, formOpen: false };
  },
  created() {
    this.getDiscounts();
  },
  methods: {
    getDiscounts() {
      this.loading = true;
      axios
        .get(`/Discount/DiscountGet?APIKEY=${this.$store.state.APIKEY}`)
        .then((response) => {
          this.loading = false;
          this.discounts = response.data.mvDiscounts;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: { InsertDiscount },
};
</script>

<style scoped lang="scss"></style>
