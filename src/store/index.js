import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

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
  },
  modules: {
  },
  plugins: [createPersistedState()]
})
