<template>
  <div :class="b()">
    <full-page ref="fullpage"
               :options="options"
               id="fullpage">
      <section v-for="item in $store.getters.getNavigationItems"
               :key="item.id"
               :id="item.id"
               class="section">
        <component :is="item.component" />
      </section>
    </full-page>
    <div :class="b('page-indicator')">
      <div>
        {{ this.$fullPageScroll.homeIndex + 1 }}
        <span :class="b('page-total')">/ {{$store.getters.getNavigationItems.length}}</span>
      </div>
      <h1 :class="b('heading')">{{ activePage }}</h1>
    </div>
  </div>
</template>

<script>
import cHomeSectionHome from '@/components/c-home-section-home';
import cHomeSectionMe from '@/components/c-home-section-me';
import cHomeSectionWork from '@/components/c-home-section-work';
import cHomeSectionContact from '@/components/c-home-section-contact';

export default {
  name: 'l-home',
  components: {
    cHomeSectionWork,
    cHomeSectionMe,
    cHomeSectionHome,
    cHomeSectionContact,
  },
  // mixins: [],

  // props: {},
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
      },
    };
  },

  computed: {
    activePage() {
      const items = this.$store.getters.getNavigationItems;
      const activeItem = items[this.$fullPageScroll.homeIndex];

      return (activeItem && activeItem.title) || '';
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
    afterLoad() {
      this.$fullPageScroll.home = this.$refs.fullpage;
    },

    onLeave(from, to) {
      const { index } = to || {};

      this.$fullPageScroll.homeIndex = index;
    },
  },
  // render() {},
};
</script>

<style lang="scss">
.l-home {
  &__page-indicator {
    @include font($font-size--30, 36px, $font-weight--bold);

    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    position: fixed;
    right: $spacing--10;
    bottom: $spacing--15;
    color: $color-primary--1;

    @include media(sm) {
      @include font($font-size--52, 52px);

      right: $spacing--30;
      bottom: $spacing--30;
    }
  }

  &__page-total {
    @include font($font-size--18, 36px, $font-weight--bold);

    color: $color-font;

    @include media(sm) {
      @include font($font-size--24, 52px);
    }
  }

  &__heading {
    font-weight: $font-weight--regular;
    margin: 0;
  }
}
</style>
