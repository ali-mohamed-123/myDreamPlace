import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/tailwind.css";
import { createPinia } from "pinia";
const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
createApp(App).use(router).use(pinia).mount("#app");
