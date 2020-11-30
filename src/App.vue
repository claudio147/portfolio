<template>
  <div id="app" :style="style">
    <c-navigation />
    <c-color-mode-selector />
    <router-view/>
  </div>
</template>
<script>
import cNavigation from '@/components/c-navigation';
import cColorModeSelector from '@/components/c-color-mode-selector';
import StoryblokClient from 'storyblok-js-client';

const storyBlokToken = 'Izm13zWEAQAoODbi2hFyuQtt';

export default {
  components: {
    cColorModeSelector,
    cNavigation,
  },
  computed: {
    /**
     * Gets the inline style to define the CSS vars.
     *
     * @returns {Object}
     */
    style() {
      const isDarkMode = this.$store.getters.getColorMode === 'dark';
      const primaryColor = isDarkMode ? '#34e4cb' : '#131d6e';
      const primaryColorRgb = isDarkMode ? 'rgba(52,228,203,1)' : 'rgba(19,29,110,1)';
      const primaryColorNegative = isDarkMode ? '#000000' : '#ffffff';
      const secondaryColor = isDarkMode ? '#000000' : '#D6D6D6';
      const fontColor = isDarkMode ? '#ffffff' : '#212121';

      return {
        '--theme-color-primary-1': primaryColor,
        '--theme-color-primary-1-rgb': primaryColorRgb,
        '--theme-color-primary-1-negative': primaryColorNegative,
        '--theme-color-secondary-1': secondaryColor,
        '--theme-color-font': fontColor,
      };
    },
  },

  beforeCreate() {
    this.$storyblok.init({
      accessToken: storyBlokToken,
    });

    window.storyblokApi = new StoryblokClient({
      accessToken: storyBlokToken,
    });
  },
};
</script>
