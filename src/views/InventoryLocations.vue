<template>
  <div class="container box">
    <div class="tile is-justify-content-space-between">
      <label class="title"> Inventory Locations </label>
      <button class="button">Add Inventory Location</button>
    </div>
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
</template>

<script>
import axios from "axios";
export default {
  name: "Inventories",
  data() {
    return { inventories: [] };
  },
  created() {
    this.getInventories();
  },
  methods: {
    getInventories() {
      axios
        .get(
          `/InventoryLocation/InventoryLocationGet?APIKEY=${this.$store.state.APIKEY}`
        )
        .then((response) => {
          this.inventories = response.data.mvInventoryLocations;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped lang="scss"></style>
