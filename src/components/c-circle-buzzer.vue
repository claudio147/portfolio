<template>
  <div :class="b()">
    <button v-for="item in mappedItems"
            :key="item.id"
            :class="b('section-button', { active: computedActiveItem === item.id })"
            type="button"
            @click="onClick(item.id)"
    >
      <e-icon :class="b('icon')"
              :icon="item.icon"
              width="30px"
              height="30px"
              inline />
      <span :class="b('text')">{{ item.label }}</span>
    </button>
    <div v-if="selectedItem" :class="b('active-item-mobile')">
      {{ selectedItem.label }}
    </div>
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

    /**
     * Gets the selected item.
     *
     * @returns {Object}
     */
    selectedItem() {
      return this.mappedItems.find((item) => item.id === this.computedActiveItem);
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

  --c-circle-buzzer-inner-spacing: 5px;

  @include media(sm) {
    --c-circle-buzzer-inner-spacing: 20px;
  }

  $innerSpacing: var(--c-circle-buzzer-inner-spacing);

  display: flex;
  flex-wrap: wrap;
  width: 400px;
  height: 400px;

  &__section-button {
    @extend %button-reset;
    @include font($font-size--10);

    position: relative;
    flex: 1 0 50%;
    max-width: 50%;
    height: 50%;
    background-color: $color-primary--1;
    border: 1px solid transparent;
    transition: transform 200ms ease-in-out;

    @include media(xs) {
      @include font($font-size--14);
    }

    @include media(sm) {
      @include font($font-size--16);
    }

    &:nth-child(1) {
      border-top-left-radius: 100%;
      border-right-color: $color-secondary--1;
      border-bottom-color: $color-secondary--1;
      transform-origin: bottom right;

      #{$this}__text,
      #{$this}__icon {
        right: $innerSpacing;
        bottom: $innerSpacing;
      }
    }

    &:nth-child(2) {
      border-top-right-radius: 100%;
      border-left-color: $color-secondary--1;
      border-bottom-color: $color-secondary--1;
      transform-origin: bottom left;

      #{$this}__text,
      #{$this}__icon  {
        left: $innerSpacing;
        bottom: $innerSpacing;
      }
    }

    &:nth-child(3) {
      border-bottom-left-radius: 100%;
      border-right-color: $color-secondary--1;
      border-top-color: $color-secondary--1;
      transform-origin: top right;

      #{$this}__text,
      #{$this}__icon  {
        right: $innerSpacing;
        top: $innerSpacing;
      }
    }

    &:nth-child(4) {
      border-bottom-right-radius: 100%;
      border-left-color: $color-secondary--1;
      border-top-color: $color-secondary--1;
      transform-origin: top left;

      #{$this}__text,
      #{$this}__icon  {
        left: $innerSpacing;
        top: $innerSpacing;
      }
    }

    &:hover {
      @include media(sm) {
        transform: scale(1.05);
      }
    }

    &:focus,
    &--active,
    &--active:hover,
    &--active:focus {
      transform: scale(1.15);
      background-color: $color-grayscale--1000;
    }
  }

  &__text {
    display: none;

    @include media(sm) {
      position: absolute;
      display: inline-block;
    }
  }

  &__icon#{$this}__icon {
    position: absolute;
    margin: $spacing--10;

    @include media(sm) {
      display: none;
    }

    path {
      fill: $color-secondary--1;
    }
  }

  &__active-item-mobile {
    @include font($font-size--18, 18px, $font-weight--bold);

    display: block;
    width: 100%;
    color: $color-font;
    text-align: center;
    margin-top: $spacing--20;
    text-decoration: underline;

    @include media(sm) {
      display: none;
    }
  }
}
</style>
