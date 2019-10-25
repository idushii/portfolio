import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

require("materialize-css/dist/js/materialize.js")
require("materialize-css/dist/css/materialize.css")

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
