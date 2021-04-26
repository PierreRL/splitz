import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Splits from "../views/Splits.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Splits",
    component: Splits,
  },
  {
    path: "/pace",
    name: "Pace",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Pace.vue"),
  },
  {
    path: "/unit-conversion",
    name: "Unit Conversion",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UnitConversion.vue"),
  },
  {
    path: "/time",
    name: "Time",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Time.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
