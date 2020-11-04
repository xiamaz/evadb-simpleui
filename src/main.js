import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import apiPlugin from './api'

import './assets/sass/main.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  apiPlugin,
  render: h => h(App)
}).$mount('#app')
