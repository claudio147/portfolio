import Vue from 'vue';
import Vuex from 'vuex';

import navigation from '@/store/data/navigation';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    /**
     * @type {Array.<Object>} Holds the list of navigation items.
     */
    navigationItems: navigation,

    /**
     * @type {String} Holds the current color mode.
     */
    colorMode: 'dark',
  },
  getters: {
    /**
     * Gets all the navigation items.
     *
     * @param {Object} state - The vuex state.
     *
     * @returns {Array.<Object>}
     */
    getNavigationItems: (state) => state.navigationItems || [],

    /**
     * Gets the current active color mode.
     *
     * @param {Object} state - The vuex state.
     *
     * @returns {String}
     */
    getColorMode: (state) => state.colorMode,
  },
  mutations: {
    /**
     * Updates the color mode.
     *
     * @param {Object} state - The vuex state.
     * @param {String} mode - The color mode.
     */
    setColorMode(state, mode) {
      state.colorMode = mode;
    },
  },
  actions: {
  },
  modules: {
  },
});
