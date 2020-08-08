import Vue from 'vue'
import App from './App.vue'
import './atomic.css'

Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
