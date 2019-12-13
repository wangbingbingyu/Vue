import Vue from 'vue'
import router from './router'
import App from './App.vue'
import './assets/css/normalize.css';
import less from 'less'
import './assets/font/iconfont.css'
import './assets/font/iconfont.js';
import Vuetify from 'vuerify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios,)
// Vue.prototype.$axios = axios


Vue.use(Vuetify)
Vue.use(less)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
