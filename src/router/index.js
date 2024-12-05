import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/home.vue";
import LoginPage from "@/views/LoginPage.vue"; // استيراد صفحة تسجيل الدخول

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home, // المكون الرئيسي
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage, // صفحة تسجيل الدخول
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
