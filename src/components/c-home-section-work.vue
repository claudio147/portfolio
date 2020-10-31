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
  data() {
    return {
      projects: [
        {
          id: 'test1',
          title: 'Test1',
          url: '/foo',
          image: 'https://loremflickr.com/800/600/dog',
          description: [
            {
              title: 'Beschreibung',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung2',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung3',
              content: 'foo baa',
            },
          ],
          technologies: {
            vue: true,
            ember: false,
            angular: false,
            javascript: true,
            html: true,
            scss: true,
            wordpress: false,
            hybris: true,
            pimcore: false,
            spryker: false,
          },
        },
        {
          id: 'test2',
          title: 'Test2',
          image: '',
          description: [
            {
              title: 'Beschreibung',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung2',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung3',
              content: 'foo baa',
            },
          ],
          technologies: {
            vue: true,
            ember: true,
            angular: true,
            javascript: true,
            html: false,
            scss: true,
            wordpress: true,
            hybris: true,
            pimcore: false,
            spryker: false,
          },
        },
        {
          id: 'test3',
          title: 'Test3',
          image: '',
          description: [
            {
              title: 'Beschreibung',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung2',
              content: 'foo baa',
            },
            {
              title: 'Beschreibung3',
              content: 'foo baa',
            },
          ],
          technologies: {
            vue: true,
            ember: false,
            angular: true,
            javascript: false,
            html: true,
            scss: true,
            wordpress: false,
            hybris: true,
            pimcore: true,
            spryker: true,
          },
        },
      ],
    };
  },

  // computed: {},
  // watch: {},

  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  mounted() {
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
      height: 60vh;
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
  }
</style>
