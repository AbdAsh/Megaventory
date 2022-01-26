<template>
  <div class="container box">
    <div class="title">Insert Client</div>
    <form @submit.prevent="addClient">
      <div class="field">
        <label class="label has-text-left">Name</label>
        <input class="input" type="text" v-model="client.SupplierClientName" />
        &nbsp;
        <label class="label has-text-left">E-mail</label>
        <input
          class="input"
          type="email"
          v-model="client.SupplierClientEmail"
        />
        &nbsp;
        <label class="label has-text-left">Shipping Address</label>
        <textarea
          class="textarea"
          type="text"
          v-model="client.SupplierClientShippingAddress1"
        />
        &nbsp;
        <label class="label has-text-left">Phone</label>
        <input class="input" type="tel" v-model="client.SupplierClientPhone1" />
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
      client: {
        SupplierClientName: "",
        SupplierClientEmail: "",
        SupplierClientShippingAddress1: "",
        SupplierClientPhone1: "",
      },
    };
  },
  computed: {
    error() {
      if (
        this.client.SupplierClientName &&
        this.client.SupplierClientEmail &&
        this.client.SupplierClientShippingAddress1 &&
        this.client.SupplierClientPhone1
      ) {
        return false;
      } else {
        return "Please fill out all fields";
      }
    },
  },
  methods: {
    addClient() {
      this.loading = true;
      this.$store
        .dispatch("insertSupplierClient", this.client)
        .then(() => {
          this.loading = false;
          this.client = {
            SupplierClientName: "",
            SupplierClientEmail: "",
            SupplierClientShippingAddress1: "",
            SupplierClientPhone1: "",
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
