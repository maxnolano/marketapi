import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from "@/store"
import i18n from './i18n'
import './assets/scss/main.scss';

Vue.config.productionTip = false
Vue.use(VueAxios, axios)

new Vue({
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
