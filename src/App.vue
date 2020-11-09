<template>
<div id="app">
  <nav class="flex items-center justify-between flex-wrap bg-orange-500 p-3">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <a class="" href="/">
      <img class="fill-current h-8 mr-2" src="./assets/Banner mono@8x.png" alt="">
      </a>
    </div>
    <div class="block lg:hidden">
      <button @click="isActive = !isActive" class="flex items-center px-3 py-2 border rounded text-orange-200 border-orange-400 hover:text-white hover:border-white">
        <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>

    <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto" :class="{hidden: !isActive}">
      <div class="text-sm lg:flex-grow">
        <router-link to="/" class="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
          Patients
        </router-link>
        <router-link to="/searches" class="block mt-4 lg:inline-block lg:mt-0 text-orange-200 hover:text-white mr-4">
          Searches
        </router-link>
      </div>
      <div>
        <a v-if="loggedIn" @click="logout" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0">Logout</a>
        <router-link v-else to="/login" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-orange-500 hover:bg-white mt-4 lg:mt-0">Login</router-link>
      </div>
    </div>
  </nav>
  <section class="section">
    <router-view/>
  </section>
</div>
</template>

<script>
export default {
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
      return this.$store.getters.isLoggedIn
    }
  },
  watch: {
    loggedIn(newValue) {
      if (!newValue) {
        this.$router.push("/login")
      }
    }
  },
  methods: {
    logout () {
      this.$store.dispatch("logout")
    }
  }
}
</script>
