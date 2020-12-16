import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import { createStore } from 'vuex'

// import { getPosts } from "@/api/api";
// import { axios } from "@/app.js";
import store from "@/common/store.js"

createApp(App).use(store).use(router).mount('#app')
