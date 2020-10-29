<template>
  <div :class="b()">
    <button v-for="item in mappedItems"
            :key="item.id"
            :class="b('section-button', { active: computedActiveItem === item.id })"
            type="button"
            @click="onClick(item.id)"
    >
      <span :class="b('inner')">{{ item.label }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'c-circle-buzzer',
  // components: {},
  // mixins: [],

  props: {
    /**
     * The items to show as buttons.
     */
    items: {
      type: Array,
      required: true,
    },

    /**
     * The initial active item.
     */
    activeItem: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      /**
       * @type {String} The internal active item.
       */
      tempActiveItem: '',
    };
  },

  computed: {
    /**
     * Gets the mapped items.
     *
     * @returns {Array.<Object>}
     */
    mappedItems() {
      const { items } = this || {};

      return Array.isArray(items) ? items.slice(0, 4) : [];
    },

    /**
     * Gets the active item either the internal or initial item.
     *
     * @returns {String}
     */
    computedActiveItem() {
      return this.tempActiveItem || this.activeItem;
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
     * Click item event handler.
     *
     * @param {String} id - The selected it.
     */
    onClick(id) {
      this.tempActiveItem = id;

      /**
       * Emits the click event.
       *
       * @event click
       *
       * @param {String} id - The clicked id.
       */
      this.$emit('click', id);
    },
  },
  // render() {},
};
</script>

<style lang="scss">
.c-circle-buzzer {
  $this: &;
  $innerSpacing: 40px;

  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;

  &__section-button {
    @extend %button-reset;

    position: relative;
    flex: 1 0 50%;
    max-width: 50%;
    height: 50%;
    background-color: $color-primary--1;
    border: 1px solid transparent;
    transition: all 200ms ease-in-out;

    &:nth-child(1) {
      border-top-left-radius: 100%;
      border-right-color: $color-secondary--1;
      border-bottom-color: $color-secondary--1;
      transform-origin: bottom right;

      #{$this}__inner {
        right: $innerSpacing;
        bottom: $innerSpacing;
      }
    }

    &:nth-child(2) {
      border-top-right-radius: 100%;
      border-left-color: $color-secondary--1;
      border-bottom-color: $color-secondary--1;
      transform-origin: bottom left;

      #{$this}__inner {
        left: $innerSpacing;
        bottom: $innerSpacing;
      }
    }

    &:nth-child(3) {
      border-bottom-left-radius: 100%;
      border-right-color: $color-secondary--1;
      border-top-color: $color-secondary--1;
      transform-origin: top right;

      #{$this}__inner {
        right: $innerSpacing;
        top: $innerSpacing;
      }
    }

    &:nth-child(4) {
      border-bottom-right-radius: 100%;
      border-left-color: $color-secondary--1;
      border-top-color: $color-secondary--1;
      transform-origin: top left;

      #{$this}__inner {
        left: $innerSpacing;
        top: $innerSpacing;
      }
    }

    &:hover {
      transform: scale(1.05);
    }

    &--active,
    &--active:hover {
      transform: scale(1.15);
    }
  }

  &__inner {
    position: absolute;
  }
}
</style>
