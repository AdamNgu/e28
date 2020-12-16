<template>
  <div>
    <h1>New Post</h1>
    <label for="Title">Title:</label>
    <br />
    <input v-model="title" type="text" id="title" name="title" required />
    <br />
    <label for="lname">Body:</label>
    <br />
    <textarea v-model="body"></textarea>
    <br />
    <div v-if="hasBlank">Title and body are required!</div>
    <button class="submit" @click="submit">Submit</button>
  </div>
</template>

<script>
import { axios } from "@/app.js";

import router from "@/router";
export default {
  data() {
    return {
      title: "",
      body: "",
      hasBlank: false,
    };
  },
  methods: {
    submit() {
      if(!this.title || !this.body) {
        this.hasBlank = true;
        return;
      }
      this.hasBlank = false;
      const post = { title: this.title, body: this.body };
      axios.post("/post", post).then(() => {
        this.$store.dispatch('fetchPosts');
        router.push("/");
      });
    },
  },
};
</script>
