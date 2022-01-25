<template>
  <div class="container box">
    <div class="tile is-justify-content-space-between">
      <label class="title"> Clients </label>
      <button class="button">Add Client</button>
    </div>
    <div class="columns">
      <label class="column"> Name </label>
      <label class="column"> Email </label>
      <label class="column"> Shipping Address </label>
      <label class="column"> Phone </label>
    </div>
    <div class="columns" v-for="(client, i) in clients" :key="i">
      <label class="column"> {{ client.SupplierClientName }}</label>
      <label class="column"> {{ client.SupplierClientEmail }}</label>
      <label class="column"> {{ client.SupplierClientShippingAddress1 }}</label>
      <label class="column"> {{ client.SupplierClientPhone1 }}</label>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Clients",
  data() {
    return { clients: [] };
  },
  created() {
    this.getClients();
  },
  methods: {
    getClients() {
      axios
        .get(
          `SupplierClient/SupplierClientGet?APIKEY=${this.$store.state.APIKEY}`
        )
        .then((response) => {
          this.clients = response.data.mvSupplierClients;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
