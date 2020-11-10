import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './setup/plugins';
import components from './setup/components';

Vue.config.productionTip = false;
Vue.config.storyblokApiKey = 'Izm13zWEAQAoODbi2hFyuQtt';

Vue.use(components);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
