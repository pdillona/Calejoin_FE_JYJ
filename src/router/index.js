// Composables
import { createRouter, createWebHistory } from "vue-router";
import JoinShowTimes from "../components/JoinShowTimes.vue";

const routes = [
  {
    path: "/",
    component: () => import("@/layouts/default/Default.vue"),
    children: [
      {
        path: "",
        name: "Home",
        component: () =>
          import(/* webpackChunkName: "home" */ "@/views/Home.vue"),
      },
      {
        path: "showtime",
        name: "JoinShowTimes",
        component: () =>
          import(
            /* webpackChunkName: "home" */ "@/components/JoinShowTimes.vue"
          ),
      },
      {
        path: "scheduleStatus",
        name: "scheduleStatus",
        component: () => import("@/components/scheduleStatus.vue"),
      },
      {
        path: "partyCreate",
        name: "partyCreate",
        component: () => import("@/components/partyCreate.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
