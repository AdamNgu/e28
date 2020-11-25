<template>
  <div>
    <h1>Post</h1>
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
  </div>
</template>

<script>
import { getPost } from "@/api/api";

export default {
  data() {
    return {
      post: {},
    };
  },

  mounted() {
    getPost(this.$route.params.postId).then((post) => {
      this.post = post;
    });
  },
};
</script>
