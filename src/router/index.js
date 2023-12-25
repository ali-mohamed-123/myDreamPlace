import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MainLayout from "../layout/main.vue";

const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/loginView.vue"),
  },

  {
    path: "/",
    component: MainLayout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: HomeView,
      },
      {
        path: "/list",
        name: "list",
        component: () => import("../views/listView.vue"),
      },
      {
        path: "/deatails",
        name: "deatails",
        component: () => import("../views/deatailsView.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
