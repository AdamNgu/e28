<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">New Post</router-link> |
      <router-link to="/account" v-if="!user">Log in</router-link>

      <search></search>
    </div>
    <router-view />
  </div>
</template>

<script>
import Search from "@/components/Search";

export default {
  components: {
    search: Search,
  },
  mounted() {
    this.$store.dispatch("fetchPosts");
    this.$store.dispatch("authUser");
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>
