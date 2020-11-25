<template>
  <div>
    <h1>New Post</h1>
    <label for="Title">Title:</label>
    <br />
    <input v-model="title" type="text" id="title" name="title" />
    <br />
    <label for="lname">Body:</label>
    <br />
    <textarea v-model="body"></textarea>
    <br />
    <button class="submit" @click="submit">Submit</button>
  </div>
</template>

<script>
// import {postPost} from '@/api/api';
import { axios } from "@/app.js";

import router from "@/router";
export default {
  data() {
    return {
      title: "",
      body: "",
    };
  },
  methods: {
    submit() {
      const post = { title: this.title, body: this.body };
      axios.post("/post", post).then(() => {
        router.push("/");
      });
      // I'd like to get this working without axios eventually but ran into some problems:
      // postPost(post).then(() => {
      //   router.push('/')
      // });
    },
  },
};
</script>
