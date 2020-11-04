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
    <button type="button" class="level-item button is-primary" :class="{ 'is-loading': isLoading}" v-on:click="login">Login</button>
    <span class="level-item has-text-danger ml-3">{{ errorMessage }}</span>
  </div>
  </form>
</div>
</template>

<script>
export default {
  data: function() {
    return {
      isIncorrect: false,
      user: "",
      password: "",
      showPassword: false,
      errorMessage: "",
      isLoading: false,
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.isLoggedIn
    },
  },
  watch: {
    loggedIn(newValue) {
      // redirect if logged in
      if (newValue) {
        this.$router.push("/")
      }
    }
  },
  methods: {
    login: async function() {
      this.isLoading = true
      await this.$store.dispatch("login", {user: this.user, password: this.password})
      this.isLoading = false
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
