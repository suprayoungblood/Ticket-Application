import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import Login from "../pages/login/Login.vue";
import Register from "../pages/registration/Register.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/login", component: Login },
  { path: "/register", component: Register },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
