<template>
<form class="max-w-md mt-16 mx-auto">
  <h4 class="text-sm text-center text-gray-700 mb-5">Log in to your account</h4>
  <div class="field">
    <div class="relative flex w-full flex-wrap items-stretch mb-1">
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-700 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"><i class="fas fa-user"></i></span>
      <input class="border-gray-400 placeholder-gray-500 appearance-none rounded-none relative block w-full pl-10 px-3 py-2 border text-gray-700 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" type="text" placeholder="Username" v-bind:class="{ 'is-danger': isIncorrect }" v-model="user"/>
    </div>
  </div>
  <div class="field">
    <div class="relative flex w-full flex-wrap items-stretch mb-3">
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-700 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-2"><i class="fas fa-lock"></i></span>
      <input class="border-gray-400 placeholder-gray-500 appearance-none rounded-none relative block w-full px-10 py-2 border text-gray-700 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5" placeholder="Password" :type="showPassword ? 'text' : 'password' " v-bind:class="{ 'is-danger': isIncorrect }" v-model="password"/>
      <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-700 absolute bg-transparent rounded text-base items-center justify-center w-8 right-0 pr-2 py-2" v-on:mousedown="showPassword = true" v-on:mouseup="showPassword = false"><i class="fas fa-eye"></i></span>
    </div>
  </div>
  <div class="flex justify-center mt-8">
    <button type="button" class="inline-flex justify-center bg-orange-500 text-white active:bg-pink-600 w-full text-sm px-6 py-2 rounded-md shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1" :class="{ 'is-loading': isLoading}" @click="login">
      <svg v-show="isLoading" class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
      Log In
    </button>
  </div>
  <Modal v-if="errorMessage"
    title="Error"
    :description="errorMessage"
    hcolor="red"
    faicon="fa-exclamation-triangle"
    rbutton="Dismiss"
    @rclick="$store.commit('dismissLoginError')"
    />
</form>
</template>

<script>
import Modal from '../components/Modal.vue'

export default {
  components: { Modal },
  data: function() {
    return {
      isIncorrect: false,
      user: "",
      password: "",
      showPassword: false,
      isLoading: false,
    }
  },
  computed: {
    loggedIn () {
      return this.$store.getters.isLoggedIn
    },
    errorMessage () {
      return this.$store.getters.loginError
    }
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
