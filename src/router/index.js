import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Message from "../views/Message.vue";
import Members from "../views/Members.vue";
import StudentMembers from "../views/StudentMembers.vue";
import Resolution from "../views/Resolution.vue";
import Thoughts from "../views/Thoughts.vue";
import Links from "../views/Links.vue";
import Workshop from "../views/Workshop.vue";
import HindiDayProgram from "../views/HindiDayProgram.vue";
import OfficeOrder from "../views/OfficeOrder.vue";
import Writings from "../views/Writings.vue";
import TrimesterReport from "../views/TrimesterReport.vue";
import Inauguration from "../views/Inauguration.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/inauguration",
    name: "inauguration",
    component: Inauguration
  },
  {
    path: "/message",
    name: "message",
    component: Message
  },
  {
    path: "/members",
    name: "members",
    component: Members
  },
  {
    path: "/studentmembers",
    name: "members",
    component: StudentMembers
  },
  {
    path: "/resolution",
    name: "resolution",
    component: Resolution
  },
  {
    path: "/thoughts",
    name: "thoughts",
    component: Thoughts
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
  },
  {
    path: "/writings",
    name: "writings",
    component: Writings
  },
  {
    path: "/trimesterReport",
    name: "trimesterReport",
    component: TrimesterReport
  }
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
