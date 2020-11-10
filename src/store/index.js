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
     * @type {Array.<Object>} Holds the list of the property navigation nodes.
     */
    propertyNavigationItems: [],

    /**
     * @type {String} Holds the active property navigation id.
     */
    activePropertyNavigationItem: '',

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
     * Gets the property navigation items.
     *
     * @param {Object} state - The vuex state.
     *
     * @returns {Array.<Object>}
     */
    getPropertyNavigationItems: (state) => state.propertyNavigationItems || [],

    /**
     * Gets the active property navigation id.
     *
     * @param {Object} state - The vuex state.
     *
     * @returns {String}
     */
    getActivePropertyNavigationItem: (state) => state.activePropertyNavigationItem || '',

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

    /**
     * Updates the property navigation nodes in the state.
     *
     * @param {Object} state - The vuex state.
     * @param {Array.<Object>} items - The list of property items.
     */
    setPropertyNavigationItems(state, items) {
      state.propertyNavigationItems = items;
    },

    /**
     * Updates the active property navigation id.
     *
     * @param {Object} state - The vuex state.
     * @param {String} id - The id of the selected navigation.
     */
    setActivePropertyNavigationItem(state, id) {
      state.activePropertyNavigationItem = id;
    },
  },
  actions: {
    /**
     * Fetches the property navigation from the storyblok CMS api.
     *
     * @param {Function} commit - The vuex commit function.
     *
     * @returns {Promise}
     */
    fetchPropertyNavigation({ commit }) {
      return storyblokApi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'properties-navigation',
      })
        .then((response) => {
          const { stories } = response?.data || {};

          if (Array.isArray(stories) && stories.length) {
            const mappedItems = stories.map((story) => {
              const { content } = story || {};

              return {
                id: story.uuid,
                label: content.label,
                icon: content.icon,
                initialActive: !!content.initialActive,
                content: content.content.map((contentItem) => ({
                  title: contentItem.title,
                  subTitle: contentItem.subtitle,
                })),
              };
            });

            const activeItem = mappedItems.find((item) => !!item.initialActive);

            commit('setPropertyNavigationItems', mappedItems);

            if (activeItem) {
              commit('setActivePropertyNavigationItem', activeItem.id);
            }
          }

          return response;
        })
        .catch(() => Promise.reject(new Error('apiFailure')));
    },
  },
  modules: {
  },
});
