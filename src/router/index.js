import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Links from "../views/Links.vue";
import Workshop from "../views/Workshop.vue";
import HindiDayProgram from "../views/HindiDayProgram.vue";
import OfficeOrder from "../views/OfficeOrder.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/links",
    name: "links",
    component: Links
  },
  {
    path: "/workshop",
    name: "workshop",
    component: Workshop
  },
  {
    path: "/hindiDayProgram",
    name: "hindiDayProgram",
    component: HindiDayProgram
  },
  {
    path: "/officeOrder",
    name: "officeOrder",
    component: OfficeOrder
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
