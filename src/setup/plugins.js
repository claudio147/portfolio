/* eslint-disable import/first */
import Vue from 'vue';
// import VModal from 'vue-js-modal';
// import PortalVue from 'portal-vue';
import VueAxios from '@/plugins/axios';
import VueBemCn from '@/plugins/vue-bem-cn';
import fullPageScroll from '@/plugins/full-page-scroll';
// import resizeEnd from '@/plugins/resize-end';
// import eventBus from '@/plugins/event-bus';
// import viewport from '@/plugins/viewport';
// import modal from '@/plugins/modalStack';
// import api from '@/plugins/api';
// import dayjs from '@/plugins/dayjs';
import VueFullPage from 'vue-fullpage.js';

// Self executing

// Vue.use(resizeEnd);
Vue.use(VueAxios);
// Vue.use(eventBus);
// Vue.use(viewport);
// Vue.use(modal);
// Vue.use(api);
Vue.use(VueBemCn, {
  hyphenate: true,
});
// Vue.use(PortalVue);
// Vue.use(VModal);
// Vue.use(dayjs);
Vue.use(VueFullPage);
Vue.use(fullPageScroll);
