import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // استيراد الراوتر
import "./style.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import "bootstrap";

AOS.init();

const app = createApp(App);
app.use(router); // استخدام الراوتر
app.mount("#app");
