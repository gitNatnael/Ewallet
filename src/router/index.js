import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import addCard from "../components/AddCard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    props: true
  },
  {
    path: "/addcard",
    name: "addCard",
    component: addCard
  }
  /*  {
    path: "/about",
    name: "About", 
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import("../views/About.vue")
  } */
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
