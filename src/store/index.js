import Vue from 'vue';
import Vuex from 'vuex';
import navigation from '@/store/data/navigation';

Vue.use(Vuex);

/**
 * Maps a list of "true" values in to the technologies object.
 *
 * @param {Array.<String>} list - The list of selected technologies.
 *
 * @returns {Object}
 */
function getTechnologiesObject(list) {
  const technologies = {
    vue: false,
    ember: false,
    angular: false,
    javascript: false,
    html: false,
    scss: false,
    wordpress: false,
    hybris: false,
    pimcore: false,
    spryker: false,
  };

  // eslint-disable-next-line no-return-assign
  list.forEach((item) => technologies[item] = true);

  return technologies;
}

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
     * @type {Array.<Object>} Holds a list of projects.
     */
    projects: [],

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
     * Gets a list of projects.
     *
     * @param {Object} state - The vuex state.
     *
     * @returns {Array.<Object>}
     */
    /* eslint-disable no-nested-ternary, max-len */
    getProjects: (state) => (Array.isArray(state.projects)
      ? state.projects.sort((a, b) => ((a.order > b.order) ? 1 : ((b.order > a.order) ? -1 : 0)))
      : []),

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

    /**
     * Updates the list of projects in the state.
     *
     * @param {Object} state - The vuex state.
     * @param {Array.<Object>} projects - The list of projects.
     */
    setProjects(state, projects) {
      state.projects = projects;
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

    /**
     * Fetches the projects from the storyblok API.
     *
     * @param {Function} commit - The vuex commit function.
     *
     * @returns {Promise}
     */
    fetchProjects({ commit }) {
      return storyblokApi.get('cdn/stories/', {
        version: 'published',
        starts_with: 'projects',
      })
        .then((response) => {
          const { stories } = response?.data || {};

          if (Array.isArray(stories) && stories.length) {
            console.log('stories', stories);
            const mappedItems = stories.map((story) => {
              const { content } = story || {};

              return {
                id: story.uuid,
                title: content.title,
                url: content.url?.url || '',
                image: content.image?.filename,
                description: content.description.map((contentItem) => ({
                  title: contentItem.title,
                  content: contentItem.content,
                })),
                technologies: getTechnologiesObject(content.technologies),
                order: parseInt(content.order, 10),
              };
            });

            commit('setProjects', mappedItems);
          }

          return response;
        })
        .catch(() => Promise.reject(new Error('apiFailure')));
    },
  },
  modules: {
  },
});
