import Vue from 'vue'
import router from './router'
import App from './App.vue'
import normalize from './assets/css/normalize.css';
import less from 'less'
import fons from './assets/font/iconfont.css'
import font from './assets/font/iconfont.js';
import Vuetify from 'vuerify'
import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios,axios,)
// Vue.prototype.$axios = axios


Vue.use(Vuetify)

Vue.use(less)
Vue.use(normalize);
Vue.use(fons);
Vue.use(font);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
