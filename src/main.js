import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import http from './http'

import './assets/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  http,
  render: h => h(App)
}).$mount('#app')
