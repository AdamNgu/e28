import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/pages/Home.vue";
import NewPost from "@/components/pages/NewPost.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/new",
    name: "New Entry",
    component: NewPost,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;