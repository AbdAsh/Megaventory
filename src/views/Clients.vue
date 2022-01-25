<template>
  <div class="container box">
    <i v-if="loading" class="gg-spinner"></i>
    <div v-else>
      <div class="tile is-justify-content-space-between">
        <label class="title"> Clients </label>
        <button
          @click.prevent="formOpen = !formOpen"
          class="button"
          :class="formOpen ? 'is-danger' : 'is-success'"
        >
          Add Client
        </button>
      </div>
      <InsertClient v-if="formOpen" />
      <div class="columns">
        <label class="column"> Name </label>
        <label class="column"> Email </label>
        <label class="column"> Shipping Address </label>
        <label class="column"> Phone </label>
      </div>
      <div class="columns" v-for="(client, i) in clients" :key="i">
        <label class="column"> {{ client.SupplierClientName }}</label>
        <label class="column"> {{ client.SupplierClientEmail }}</label>
        <label class="column">
          {{ client.SupplierClientShippingAddress1 }}</label
        >
        <label class="column"> {{ client.SupplierClientPhone1 }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InsertClient from "@/components/InsertClient.vue";
export default {
  name: "Clients",
  data() {
    return { clients: [], loading: false, formOpen: false };
  },
  created() {
    this.getClients();
  },
  methods: {
    getClients() {
      this.loading = true;
      axios
        .get(
          `SupplierClient/SupplierClientGet?APIKEY=${this.$store.state.APIKEY}`
        )
        .then((response) => {
          this.loading = false;
          this.clients = response.data.mvSupplierClients;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: { InsertClient },
};
</script>

<style scoped lang="scss"></style>
