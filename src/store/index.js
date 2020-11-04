import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate"

import { api } from '@/api'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userName: "",
      loggedIn: false,
    },
    samples: {
      data: [],
      loaded: false,
    },
  },
  getters: {
    isLoggedIn: state => state.user.loggedIn,
  },
  mutations: {
    setUser(state, payload) {
      state.user.userName = payload.name
      state.user.loggedIn = payload.loggedIn
    },
    setSamples(state, payload) {
      state.samples.data = payload
      state.samples.loaded = true
    }
  },
  actions: {
    async logout (context) {
      await api.logout()
      context.commit("setUser", {"userName": "", "loggedIn": false})
    },
    async login (context, {user, password}) {
      const result = await api.login(user, password)
      if (result["error"]) {
        context.commit("setUser", {name: "", loggedIn: false})
      } else {
        context.commit("setUser", {name: this.user, loggedIn: true})
      }
    },
    async checkSession(context) {
      const result = await api.checkSession()
      if (result["error"]) {
        context.commit("setUser", {name: "", loggedIn: false})
      }
    }
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
