<template>
  <div class="container box">
    <div class="title">Insert Inventory Location</div>
    <form @submit.prevent="addInventory">
      <div class="field">
        <label class="label has-text-left">Abbreviation</label>
        <input
          class="input"
          type="text"
          v-model="inventory.InventoryLocationAbbreviation"
        />
        &nbsp;
        <label class="label has-text-left">Name</label>
        <input
          class="input"
          type="text"
          v-model="inventory.InventoryLocationName"
        />
        &nbsp;
        <label class="label has-text-left">Address</label>
        <textarea
          class="textarea"
          type="text"
          v-model="inventory.InventoryLocationAddress"
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
      inventory: {
        InventoryLocationAbbreviation: "",
        InventoryLocationName: "",
        InventoryLocationAddress: "",
      },
    };
  },
  computed: {
    error() {
      if (
        this.inventory.InventoryLocationAbbreviation &&
        this.inventory.InventoryLocationName &&
        this.inventory.InventoryLocationAddress
      ) {
        return false;
      } else {
        return "Please fill out all fields";
      }
    },
  },
  methods: {
    addInventory() {
      this.loading = true;
      this.$store
        .dispatch("insertInventoryLocation", this.inventory)
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
