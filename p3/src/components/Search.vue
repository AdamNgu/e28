<template>
    <input v-model="search" type="text" id="search" name="search" />
    <button class="submit" @click="submit">Search</button>
</template>

<script>
import router from "@/router";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    submit() {
        router.push(`/search/${this.search}`);
    },
  },
};
</script>

<style lang="scss">
  #search {
    margin-left: 20px;
  }
</style>
