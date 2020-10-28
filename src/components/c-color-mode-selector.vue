<template>
  <div :class="b()">
    <button :class="b('button', { active: mode === 'dark' })"
            @click="onClick('dark')">
      Dark
    </button>
    <button :class="b('button', { active: mode === 'light' })"
            @click="onClick('light')">
      Light
    </button>
  </div>
</template>

<script>
export default {
  name: 'c-color-mode-selector',
  // components: {},
  // mixins: [],

  // props: {},
  // data() {
  //   return {};
  // },

  computed: {
    /**
     * Gets the color mode.
     *
     * @returns {String}
     */
    mode() {
      return this.$store.getters.getColorMode;
    },
  },
  // watch: {},

  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // activated() {},
  // deactivated() {},
  // beforeDestroy() {},
  // destroyed() {},

  methods: {
    /**
     * Click event handler.
     *
     * @param {String} mode - The clicked mode.
     */
    onClick(mode) {
      this.$store.commit('setColorMode', mode);
    },
  },
  // render() {},
};
</script>

<style lang="scss">
.c-color-mode-selector {
  position: fixed;
  bottom: $spacing--30;
  left: $spacing--15;
  z-index: 999;

  @include media(sm) {
    left: $spacing--30;
  }

  &__button {
    @include font($font-size--16);
    @extend %button-reset;

    cursor: pointer;
    color: $color-font;
    margin-right: $spacing--15;

    &:hover {
      color: $color-primary--1;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  &__button--active {
    color: $color-primary--1;
    border-bottom: 2px solid $color-primary--1;
  }
}
</style>
