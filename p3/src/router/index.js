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

// beforeEach provides a way to execute some code before a route is resolved
// Ref: https://router.vuejs.org/guide/advanced/navigation-guards.html
router.beforeEach(async (to, from, next) => {

  // Exact the meta information from our routes
  // Ref: https://router.vuejs.org/guide/advanced/meta.html#route-meta-fields
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !store.state.user) {
    console.log('denied')
      // If they’re trying to access a requiresAuth route and they're not logged in, they get sent to "Access Denied" page
      next('/denied');
  }
  else {
      // In all other circumstances, send them to the route they requested
      next();
  }
})

export default router;
