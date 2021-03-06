/* eslint-disable */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import axios from 'axios'
import VueAxios from 'vue-axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.config.productionTip = false
Vue.config.lang = 'en'
Vue.use(VueAxios, axios)

Vue.use(BootstrapVue)

Vue.use(ElementUI)

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
