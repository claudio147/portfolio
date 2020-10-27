import Vue from 'vue';
import Vuex from 'vuex';

import navigation from '@/store/data/navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    navigationItems: navigation,
  },
  getters: {
    getNavigationItems: (state) => state.navigationItems || [],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
