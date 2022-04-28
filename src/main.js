import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store.js'

Vue.config.productionTip = false

window.store = store;
new Vue({
  router ,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.filter('capitalize', function (value, arg1, arg2) {
  console.log(arg1, arg2);
  value = value.toString();
  return value.toUpperCase();
})
