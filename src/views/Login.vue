<template>
<div class="container">
  <form>
  <div class="field">
    <label class="label">User</label>
    <div class="control has-icons-left">
      <input class="input" type="text" v-bind:class="{ 'is-danger': isIncorrect }" v-model="user"/>
      <span class="icon is-small is-left"><i class="fas fa-user"></i></span>
    </div>
  </div>
  <div class="field">
    <label class="label">Password</label>
    <div class="control has-icons-left has-icons-right">
      <input class="input" :type="showPassword ? 'text' : 'password' " v-bind:class="{ 'is-danger': isIncorrect }" v-model="password"/>
      <span class="icon is-small is-left"><i class="fas fa-key"></i></span>
      <span class="icon is-action is-small is-right" v-on:mousedown="showPassword = true" v-on:mouseup="showPassword = false"><i class="fas fa-eye"></i></span>
    </div>
  </div>
  <div class="login-button-container">
    <button type="button" class="level-item button is-primary" v-on:click="login">Login</button>
    <span class="level-item has-text-danger ml-3">{{ errorMessage }}</span>
  </div>
  </form>
</div>
</template>

<script>
import axios from 'axios'
export default {
  data: function() {
    return {
      isIncorrect: false,
      user: "",
      password: "",
      showPassword: false,
      errorMessage: "",
    }
  },
  methods: {
    login: function() {
      if (!(this.user && this.password)) {
        this.isIncorrect = true
      } else {
        this.isIncorrect = false
      }
      axios.post(
        'http://localhost:5000/login', {user: this.user, password: this.password}
      ).then((response) => {
        const data = response.data
        if (data["error"]) {
          this.isIncorrect = true
          this.errorMessage = data["error"]
        } else if (!data["data"]["logged_in"]) {
          this.isIncorrect = true
          this.errorMessage = "Login failed."
        } else {
          this.isIncorrect = false
          this.errorMessage = ""
          this.$store.commit("setUser", {name: this.user, loggedIn: data["data"]["logged_in"]})
          this.$router.push({path: "/"})
        }
      }).catch((error) => {
        this.isIncorrect = true
        this.errorMessage = error.toString()
      })
    }
  }
}
</script>

<style>
.icon.is-action {
  cursor: pointer;
  pointer-events: initial !important;
}

.login-button-container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
}
</style>
