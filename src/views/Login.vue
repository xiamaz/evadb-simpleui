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
    login: async function() {
      const result = await this.$http.login(this.user, this.password)
      if (result["error"]) {
        this.isIncorrect = true
        this.errorMessage = result["error"]
      } else {
        this.errorMessage = ""
        this.isIncorrect = false
        this.$router.push({path: "/"})
        this.$store.commit("setUser", {name: this.user, loggedIn: true})
      }
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
