// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from 'jquery'
import axios from 'axios'
import PageHeader from '@/components/common/Header'
import PageFooter from '@/components/common/footer'
import '../../assets/style/main.css'

Vue.config.productionTip = false
Vue.prototype.$http = axios

/* eslint-disable no-new */
Vue.component('page-header', PageHeader);
Vue.component('page-footer', PageFooter);

new Vue({
  el: '#app',
  $,
  router,
  template: '<App/>',
  components: { App }
})
