<template>
  <div id="app">
    <nav id="nav" class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
        <img src="./assets/Banner mono@8x.png" alt="">
        </a>
        <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarMain" v-on:click="isActive = !isActive">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>
      <div id="navbarMain" class="navbar-menu" v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
            <router-link to="/" class="navbar-item">Home</router-link>
            <router-link to="/about" class="navbar-item">About</router-link>
        </div>
        <div class="navbar-end">
          <div v-if="loggedIn" class="navbar-item">
            <router-link to="/user" class="button is-light">Logged in as {{ userName }}</router-link>
          </div>
          <div v-else class="navbar-item">
            <router-link to="/login" class="button is-light">Login</router-link>
          </div>
        </div>
      </div>
    </nav>
    <section class="section">
      <router-view/>
    </section>
  </div>
</template>

<script>
  module.exports = {
    data: function() {
     return {
      isActive: false
     }
    },
    computed: {
      userName () {
        return this.$store.state.user.userName
      },
      loggedIn () {
        return this.$store.state.user.loggedIn
      }
    }
  }
</script>
