<template>
  <div>
    <h1>Post</h1>
    <h2>{{ post.title }}</h2>
    <div>{{ post.body }}</div>
    <button @click="favorite">Favorite post</button>
  </div>
</template>

<script>

export default {
  data() {
  },
  computed: {
    post() {
      const id = Number(this.$route.params.postId)
      return this.$store.getters.getPostById(id);
    }
  },
  methods: {
    favorite() {

    }
  }

};
</script>
