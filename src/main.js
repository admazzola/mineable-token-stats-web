import Vue from 'vue'
import VueTailwind from 'vue-tailwind'
import App from './App.vue'
import router from './router'
  

//import "tailwindcss/tailwind.css"


import './css/bootstrap.min.css'
import './css/minimal-icons-embedded.css'
import './css/toastr.min.css'
import './css/style.css'


Vue.config.productionTip = false
 

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
