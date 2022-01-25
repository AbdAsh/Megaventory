import { createStore } from "vuex";
import axios from "axios";
import Swal from "sweetalert2";

axios.defaults.baseURL = "https://api.megaventory.com/v2017a/";

const Toast = Swal.mixin({
  toast: true,
  position: "bottom-end",
  background: "#fff",
  showConfirmButton: false,
  timer: 5000,
  customClass: {
    title: "title-class",
  },
});

export default createStore({
  state: {
    APIKEY: "9a251a681b536899@m128049",
  },
  mutations: {
    showToast(state, { type, payload }) {
      Toast.fire({
        icon: type,
        text: payload,
      });
    },
  },
  actions: {
    insert({ commit, state }, { url, payload, callback }) {
      new Promise((resolve, reject) => {
        axios
          .post(`${url}?APIKEY=${state.APIKEY}`, payload)
          .then((res) => {
            res.data.ResponseStatus.ErrorCode == 0
              ? (resolve(res),
                commit("showToast", {
                  type: "success",
                  payload: callback,
                }))
              : (reject(res),
                commit("showToast", {
                  type: "error",
                  payload: res.data.ResponseStatus.Message,
                }));
          })
          .catch((err) => {
            commit("showToast", {
              type: "error",
              payload: "An error occured",
            });
            reject(err);
          });
      });
    },
    insertProduct({ dispatch }, payload) {
      dispatch("insert", {
        url: "Product/ProductUpdate",
        payload: { mvProduct: payload },
        callback: "Product inserted",
      });
    },
    insertSupplierClient({ dispatch }, payload) {
      dispatch("insert", {
        url: "SupplierClient/SupplierClientUpdate",
        payload: { mvSupplierClient: payload },
        callback: "Supplier Client Added",
      });
    },
    insertInventoryLocation({ dispatch }, payload) {
      dispatch("insert", {
        url: "InventoryLocation/InventoryLocationUpdate",
        payload: { mvInventoryLocation: payload },
        callback: "Inventory Location Added",
      });
    },
    insertTax({ dispatch }, payload) {
      dispatch("insert", {
        url: "Tax/TaxUpdate",
        payload: { mvTax: payload },
        callback: "Tax Added",
      });
    },
    insertDiscount({ dispatch }, payload) {
      dispatch("insert", {
        url: "Discount/DiscountUpdate",
        payload: { mvDiscount: payload },
        callback: "Discount Added",
      });
    },
  },
  modules: {},
});
