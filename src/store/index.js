import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      userName: "",
      loggedIn: false,
    },
  },
  mutations: {
    setUser(state, payload) {
      state.user.userName = payload.name
      state.user.loggedIn = payload.loggedIn
    }
  },
  actions: {
  },
  modules: {
  }
})
