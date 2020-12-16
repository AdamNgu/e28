import { createWebHistory, createRouter } from "vue-router";
import Home from "@/components/pages/Home.vue";
import NewPost from "@/components/pages/NewPost.vue";
import Post from "@/components/pages/Post.vue";
import SearchResults from "@/components/pages/SearchResults.vue";
import LoginRegister from "@/components/pages/LoginRegister.vue";
import AccessDenied from "@/components/pages/AccessDenied.vue";
import store from "@/common/store.js"

// import store from '@/common/store';

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
    meta: {
      requiresAuth: true
    }
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
  {
    path: "/account",
    name: "LoginRegister",
    component: LoginRegister,
  },
  {
    path: "/denied",
    name: "AccessDenied",
    component: AccessDenied,
  },  
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !store.state.user) {
      next('/denied');
  }
  else {
      next();
  }
})

export default router;
