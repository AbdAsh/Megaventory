import { createRouter, createWebHistory } from "vue-router";
import Clients from "../views/Clients.vue";
import Discounts from "../views/Discounts.vue";
import Home from "../views/Home.vue";
import Products from "../views/Products.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/products",
    name: "Products",
    component: Products,
  },
  {
    path: "/discounts",
    name: "Discounts",
    component: Discounts,
  },
  {
    path: "/clients",
    name: "Clients",
    component: Clients,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
