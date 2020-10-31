<template>
  <nav :class="b()">
    <ul :class="b('list')">
      <li v-for="(item, index) in $store.getters.getNavigationItems"
          :key="item.id"
          :class="b('list-item')">
        <a :class="b('link', { active: activeId === index })"
           :title="item.title"
           href="#"
           @click.prevent="onClickLink(index + 1)">
          <span class="invisible">{{ item.title }}</span>
          <e-icon :icon="item.icon" inline />
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
  data() {
    return {
      activeId: 0,
    };
  },

  // computed: {},
  watch: {
    '$fullPageScroll.homeIndex': {
      handler(index) {
        this.activeId = index;
      },
    },
  },

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
    onClickLink(id) {
      const { home } = this.$fullPageScroll;

      if (home) {
        home.api.moveTo(id);
      }
    },
  },
  // render() {},
};
</script>

<style lang="scss">
  .c-navigation {
    z-index: 999;
    position: fixed;
    top: $spacing--50;
    right: $spacing--10;

    @include media(sm) {
      top: 50%;
      transform: translateY(-50%);
      right: $spacing--30;
    }

    &__list {
      @extend %list-reset;
    }

    &__list-item {
      margin-bottom: $spacing--15;

      @include media(sm) {
        margin-bottom: $spacing--25;
      }
    }

    &__list-item:last-child {
      margin-bottom: 0;
    }

    &__link {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: $spacing--10;
      border: 2px solid $color-primary--1;
      background-color: $color-grayscale--0;
      border-radius: 50%;
      color: $color-grayscale--1000;
      transition: all 200ms ease-in-out;

      svg {
        width: 20px;
        height: 20px;

        @include media(sm) {
          width: 30px;
          height: 30px;
        }

        path,
        rect,
        polygon {
          fill: $color-grayscale--1000;
        }
      }
    }

    &__link:hover,
    &__link:focus,
    &__link--active {
      background-color: $color-primary--1;
    }

    &__link--active {
      svg path,
      svg rect,
      svg polygon {
        fill: $color-grayscale--0;
      }
    }
  }
</style>
