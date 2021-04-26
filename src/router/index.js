import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),

  routes,
  scrollBehavior(to, /*from, savedPosition*/) {
    // console.log("to:", to, "from:", from, "savedPos:", savedPosition);
    if (to.hash) {
      return new Promise((resolve , /*reject*/) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            top: 100,
            behavior: "smooth",
          });
        }, 0);
      });
    }
  },
});
// console.log(router);

export default router;
