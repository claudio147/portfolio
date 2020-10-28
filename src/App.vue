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
      const primaryColor = isDarkMode ? '#34e4cb' : '#443594';
      const secondaryColor = isDarkMode ? '#000000' : '#D6D6D6';
      const fontColor = isDarkMode ? '#ffffff' : '#000000';

      return {
        '--theme-color-primary-1': primaryColor,
        '--theme-color-secondary-1': secondaryColor,
        '--theme-color-font': fontColor,
      };
    },
  },
};
</script>
