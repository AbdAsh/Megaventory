<template>
  <div class="container box">
    <i v-if="loading" class="gg-spinner"></i>
    <div v-else>
      <div class="tile is-justify-content-space-between">
        <label class="title"> Inventory Locations </label>
        <button
          @click.prevent="formOpen = !formOpen"
          class="button"
          :class="formOpen ? 'is-danger' : 'is-success'"
        >
          Add Inventory Location
        </button>
      </div>
      <InsertInventoryLocation v-if="formOpen" />
      <div class="columns">
        <label class="column is-one-fifth"> Abbreviation </label>
        <label class="column"> Name </label>
        <label class="column"> Address </label>
      </div>
      <div class="columns" v-for="(inventory, i) in inventories" :key="i">
        <label class="column is-one-fifth">
          {{ inventory.InventoryLocationAbbreviation }}</label
        >
        <label class="column"> {{ inventory.InventoryLocationName }}</label>
        <label class="column"> {{ inventory.InventoryLocationAddress }}</label>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import InsertInventoryLocation from "@/components/InsertInventoryLocation.vue";
export default {
  name: "Inventories",
  data() {
    return { inventories: [], loading: false, formOpen: false };
  },
  created() {
    this.getInventories();
  },
  methods: {
    getInventories() {
      this.loading = true;
      axios
        .get(
          `/InventoryLocation/InventoryLocationGet?APIKEY=${this.$store.state.APIKEY}`
        )
        .then((response) => {
          this.loading = false;
          this.inventories = response.data.mvInventoryLocations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  components: { InsertInventoryLocation },
};
</script>

<style scoped lang="scss"></style>
