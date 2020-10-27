import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './setup/plugins';
import components from './setup/components';

Vue.config.productionTip = false;

Vue.use(components);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
