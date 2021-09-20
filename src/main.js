import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import router from './router.js'
import PageLoading from './components/PageLoading.vue';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.component("PageLoading", PageLoading);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
