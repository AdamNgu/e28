<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/new">New Post</router-link>
      <search></search>
    </div>
    <router-view />
  </div>
</template>

<script>
import Search from '@/components/Search';

export default {
  components: {
    'search': Search
  }
}
</script>