// import { createApp } from 'vue'
import { createStore } from 'vuex'
import { getPosts } from "@/api/api";
import { axios } from "@/app.js";

export default createStore({
    state () {
      return {
        posts: [],
        user: null
      }
    },
    mutations: {
      setPosts(state, payload) {
          state.posts = payload;
      },
      setUser(state, payload) {
          state.user = payload;
      },
    },
    getters: {
      getPostById: (state) => (id) => {
          
          const post = state.posts.find(post => post.id === id)
          return post || {};
        }
    },
    actions: {
      fetchPosts(context) {
          getPosts().then((posts) => {
              context.commit('setPosts', posts)
            });
      },
      authUser(context) {
          axios.post('auth').then((response) => {
              if (response.data.authenticated) {
                  context.commit('setUser', response.data.user);
              }
          });
      },
  }
  })