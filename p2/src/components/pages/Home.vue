<template>
  <div>
    <h1>Home Page</h1>
    <h2>Posts</h2>
    <ul>
      <router-link
        v-for="post in posts"
        :key="post.id"
        v-bind:to="'/posts/' + post.id"
        exact
      >
        {{ post.title }}
        <br />
      </router-link>
    </ul>
  </div>
</template>

<script>
import { getPosts } from "@/api/api";

export default {
  data() {
    return {
      posts: [],
    };
  },
  mounted() {
    getPosts().then((posts) => {
      this.posts = posts;
    });
  },
};
</script>
