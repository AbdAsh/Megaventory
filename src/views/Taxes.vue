<template>
  <div class="container box">
    <i v-if="loading" class="gg-spinner"></i>
    <div v-else>
      <div class="tile is-justify-content-space-between">
        <label class="title"> Taxes </label>
        <button class="button">Add Tax</button>
      </div>
      <div class="columns">
        <label class="column"> Name </label>
        <label class="column"> Description </label>
        <label class="column is-one-fifth"> Value </label>
      </div>
      <div class="columns" v-for="(tax, i) in taxes" :key="i">
        <label class="column"> {{ tax.TaxName }}</label>
        <label class="column"> {{ tax.TaxDescription }}</label>
        <label class="column is-one-fifth"> {{ tax.TaxValue }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Taxes",
  data() {
    return { taxes: [], loading: false };
  },
  created() {
    this.getTaxes();
  },
  methods: {
    getTaxes() {
      this.loading = true;
      axios
        .get(`/Tax/TaxGet?APIKEY=${this.$store.state.APIKEY}`)
        .then((response) => {
          this.loading = false;
          this.taxes = response.data.mvTaxes;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
