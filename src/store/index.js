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

const APIKEY = "9a251a681b536899@m128049";
// const APIKEY = "9a251a681b536899";
export default createStore({
  state: {},
  mutations: {
    showToast(state, { type, payload }) {
      Toast.fire({
        icon: type,
        text: payload,
      });
    },
  },
  actions: {
    insertProduct({ commit }, payload) {
      new Promise((resolve, reject) => {
        axios
          .post(`Product/ProductUpdate?APIKEY=${APIKEY}`, {
            mvProduct: payload,
          })
          .then((res) => {
            res.data.ResponseStatus.ErrorCode == 0
              ? (resolve(res),
                commit("showToast", {
                  type: "success",
                  payload: "Product Added",
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
    insertSupplierClient({ commit }, payload) {
      new Promise((resolve, reject) => {
        axios
          .post(`SupplierClient/SupplierClientUpdate?APIKEY=${APIKEY}`, {
            mvSupplierClient: payload,
          })
          .then((res) => {
            res.data.ResponseStatus.ErrorCode == 0
              ? (resolve(res),
                commit("showToast", {
                  type: "success",
                  payload: "Supplier Client Added",
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
    insertInventoryLocation({ commit }, payload) {
      new Promise((resolve, reject) => {
        axios
          .post(`InventoryLocation/InventoryLocationUpdate?APIKEY=${APIKEY}`, {
            mvInventoryLocation: payload,
          })
          .then((res) => {
            res.data.ResponseStatus.ErrorCode == 0
              ? (resolve(res),
                commit("showToast", {
                  type: "success",
                  payload: "Inventory Location Added",
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
  },
  modules: {},
});
