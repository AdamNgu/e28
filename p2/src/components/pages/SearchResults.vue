// TODO: have a specific message that appears when no results found
// TODO 2: DRY Home.vue and SeachResults.vue, there's a lot of redundant code between both
<template>
  <div>
    <h1>Post Search</h1>
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
      const filteredPosts = posts.filter((post) => {
        return (
          post.title.includes(this.$route.params.searchQuery) ||
          post.body.includes(this.$route.params.searchQuery)
        );
      });
      this.posts = filteredPosts;
    });
  },
};
</script>
