import Vue from "vue";
import VueRouter from "vue-router";
import ProfileView from "../views/ProfileView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "profile",
    component: ProfileView,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
