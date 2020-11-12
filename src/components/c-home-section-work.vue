<template>
  <div :class="b()">
    <!-- Swiper -->
    <div ref="container"
         :class="b('container swiper-container')"
         class="swiper-container">
      <div :class="b('wrapper')"
           class="swiper-wrapper">
        <div v-for="project in projects"
             :key="project.id"
             :class="b('slide')"
             class="swiper-slide">
          <c-project-reference :project="project" />
        </div>
      </div>

      <!-- Navigation -->
      <div :class="b('navigation')">
        <div ref="previous" :class="b('button', { previous: true })">
          previous
        </div>
        <div ref="next" :class="b('button', { next: true })">
          next
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Swiper, { Navigation } from 'swiper';
import 'swiper/swiper-bundle.css';
import CProjectReference from '@/components/c-project-reference';

Swiper.use([Navigation]);

export default {
  name: 'c-home-section-work',
  components: { CProjectReference },
  // components: {},
  // mixins: [],

  // props: {},
  // data() {
  //   return {};
  // },

  computed: {
    /**
     * Gets the projects from the vuex state.
     *
     * @returns {Array.<Object>}
     */
    projects() {
      return this.$store.getters.getProjects;
    },
  },
  watch: {
    /**
     * Observes the projects and inits the swiper.
     */
    projects() {
      this.$nextTick(() => this.initSwiper());
    },
  },

  // beforeCreate() {},
  created() {
    this.$store.dispatch('fetchProjects');
  },
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
     * Init swiper function.
     */
    initSwiper() {
      const { container, next, previous } = this.$refs;
      const options = {
        loop: true,
        navigation: {
          nextEl: next,
          prevEl: previous,
        },
      };

      // eslint-disable-next-line no-new
      new Swiper(container, options);
    },
  },
  // render() {},
};
</script>

<style lang="scss">
  .c-home-section-work {
    @extend %home-layout;

    display: flex;
    align-items: flex-start;
    justify-content: center;

    @include media(sm) {
      align-items: center;
    }

    &__container {
      position: relative;
      box-shadow: 0 0 40px 2px $color-primary--1;
      margin: 0 auto;
      margin-top: 50px;
      height: 65vh;
      width: 100%;

      @include media(sm) {
        width: 80vw;
        height: 80vh;
        box-shadow: 0 0 150px 10px $color-primary--1;
        margin-top: 0;
      }
    }

    &__slide {
      padding: $spacing--30 $spacing--15 $spacing--40;

      @include media(sm) {
        padding: $spacing--50 $spacing--50 $spacing--80;
      }
    }

    &__navigation {
      @include z-index(front);

      position: absolute;
      left: 0;
      display: flex;
      justify-content: space-between;
      width: 100%;
      padding: 0 $spacing--10;
      bottom: 10px;

      @include media(sm) {
        bottom: 30px;
        left: 50%;
        width: auto;
        transform: translateX(-50%);
        align-items: center;
        justify-content: flex-start;
      }
    }

    &__button {
      cursor: pointer;
    }

    &__button--previous {
      margin-right: $spacing--40;
    }

    .c-project-reference {
      height: 100%;
    }
  }
</style>
