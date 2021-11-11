import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import router from './router'
  

//import "tailwindcss/tailwind.css"

import './css/tailwind.css'
import '@fortawesome/fontawesome-free/js/all.js';
import './css/main.css'
import './css/normalize.css'
 



Vue.config.productionTip = false
 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
