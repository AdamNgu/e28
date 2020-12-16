<template>
  <div data-cy="home">
    <h1>Home Page</h1>
    <h2>Posts</h2>
    <ul data-cy="posts">
      <router-link
        v-for="post in posts"
        :key="post.id"
        v-bind:to="'/posts/' + post.id"
        exact
      >
        <div data-cy="post">{{ post.title }}</div>
        <br />
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  data() {},
  computed: {
    posts() {
      return this.$store.state.posts;
    },
  },
};
</script>
