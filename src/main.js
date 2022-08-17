import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import store from '@/store/store.js'
import { i18n } from '@/libs/i18n'
import '@/bootstrap/scss/bootstrap.scss'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import '@/styles/style.scss'


Vue.config.productionTip = false;
Vue.use(BootstrapVue);
new Vue({
  render: h => h(App),
  store,
  i18n,
  router,
}).$mount('#app')
