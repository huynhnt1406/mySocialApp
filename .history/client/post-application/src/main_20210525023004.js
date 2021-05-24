import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'ant-design-vue/dist/antd.css';
import Antd from 'ant-design-vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import router from './router/index.js'
import store from './store/index'
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
