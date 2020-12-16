<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">New Post</router-link> |
      <router-link to="/account" v-if="!user">Log in</router-link>
      <!-- <button @click="logout" v-if="user">Log out</button> -->

      <search></search>
    </div>
    <router-view />
  </div>
</template>

<script>
// import { axios } from "@/app.js";
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
  // methods: {
  //   logout() {
  //     axios.post("logout").then((response) => {
  //       if (response.data.success) {
  //         this.$store.commit("setUser", null);
  //       }
  //     });
  //   },
  // },
};
</script>
