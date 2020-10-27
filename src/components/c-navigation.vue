<template>
  <nav :class="b()">
    <ul :class="b('list')">
      <li :class="b('list-item')">
        <a :class="b('link')" href="#1">
          <e-icon icon="home" inline />
        </a>
      </li>
      <li :class="b('list-item')">
        <a :class="b('link')" href="#2">
          <e-icon icon="home" inline />
        </a>
      </li>
      <li :class="b('list-item')">
        <a :class="b('link')" href="#3">
          <e-icon icon="home" inline />
        </a>
      </li>
      <li :class="b('list-item')">
        <a :class="b('link')" href="#4">
          <e-icon icon="home" inline />
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'c-navigation',
  // components: {},
  // mixins: [],

  // props: {},
  // data() {
  //   return {};
  // },

  // computed: {},
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

  // methods: {},
  // render() {},
};
</script>

<style lang="scss">
  .c-navigation {
    z-index: 999;
    position: fixed;
    right: 30px;
    top: 50vh;
    transform: translateY(-50%);

    &__list {
      @extend %list-reset;
    }

    &__list-item {
      margin-bottom: $spacing--25;
    }

    &__list-item:last-child {
      margin-bottom: 0;
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 10px;
      border: 2px solid $color-primary--1;
      background-color: $color-grayscale--0;
      border-radius: 50%;
      color: $color-grayscale--1000;
      transition: all 200ms ease-in-out;

      svg {
        width: 30px;
        height: 30px;

        path {
          fill: $color-grayscale--1000;
        }
      }
    }

    &__link:hover {
      background-color: $color-primary--1;
      color: $color-grayscale--0;

      svg path {
        fill: $color-grayscale--0;
      }
    }
  }
</style>
