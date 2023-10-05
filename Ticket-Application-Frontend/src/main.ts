import { createApp } from "vue";
import App from "./App.vue";
import router from "./lib/router";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./style.css";

createApp(App).use(router).mount("#app");
