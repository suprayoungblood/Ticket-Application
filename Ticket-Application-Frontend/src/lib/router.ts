import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/home/Home.vue";
import TicketDetails from "../pages/ticket-details/Ticket-Details.vue";
import TicketForm from "../pages/ticket-form/Ticket-Form.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/ticket-details/:id", component: TicketDetails, props: true },
  { path: "/ticket-form", component: TicketForm },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
