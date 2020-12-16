<!-- This login form was heavily inspired by zipfoods. The error handling code is excellent -->
<template>
  <div>
    <div>
      <h2>Login / Register</h2>
      <div>
        <label for="Email">Email:</label>
        <br />
        <input
          type="text"
          id="email"
          name="email"
          v-model="user.email"
          required
        />
      </div>
      <div>
        <label for="Password">Password:</label>
        <br />
        <input
          type="password"
          id="password"
          name="password"
          v-model="user.password"
          required
        />
      </div>
      <div v-if="showRegister">
        <label for="Name">Name:</label>
        <br />
        <input type="name" id="name" name="name" v-model="user.name" required />
      </div>

      <button @click="login" v-if="!showRegister">Login</button>
      <button @click="toggleRegister" v-if="!showRegister">New Account</button>
      <button @click="submitRegister" v-if="showRegister">Submit</button>

      <ul v-if="errors">
        <li class="error" v-for="(error, index) in errors" :key="index">
          {{ error }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { axios } from "@/app.js";
import router from "@/router";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
        name: "",
      },
      errors: null,
      showRegister: false,
    };
  },
  methods: {
    login() {
      axios.post("login", this.user).then((response) => {
        if (response.data.authenticated) {
          this.$store.commit("setUser", response.data.user);
          router.push("/");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
    toggleRegister() {
      this.showRegister = true;
    },
    submitRegister() {
      axios.post("register", this.user).then((response) => {
        if (response.status === 200) {
          this.$store.commit("setUser", response.data.user);
          router.push("/");
        } else {
          this.errors = response.data.errors;
        }
      });
    },
  },
};
</script>
