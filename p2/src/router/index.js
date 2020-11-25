import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/pages/Home.vue";
import NewPost from "@/components/pages/NewPost.vue";
import Post from "@/components/pages/Post.vue";
import SearchResults from "@/components/pages/SearchResults.vue";

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
  {
    path: "/posts/:postId",
    name: "Post",
    component: Post,
  },
  {
    path: "/search/:searchQuery",
    name: "SearchResults",
    component: SearchResults,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
