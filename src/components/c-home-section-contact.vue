<template>
  <div :class="b()">
    <h1 :class="b('title')">Get in touch</h1>

    <div ref="wrapper"
         :class="b('wrapper')"
         @mousemove="onWrapperMouseMove"
         @mouseenter="onWrapperMouseEnter"
         @mouseleave="onWrapperMouseLeave">
      <div ref="card" :class="b('card')">
        <img :class="b('phone-background')" src="../assets/iphone.png" alt="phone-background">
        <ul :class="b('list')">
          <li v-for="item in items" :key="item.url" :class="b('list-item')">
            <a :href="item.url"
               :title="item.name"
               :class="b('link')"
               target="_blank"
               rel="noopener">
              <img :class="b('image')" :src="item.imageSrc" :alt="item.name">
              <span :class="b('link-text')">{{ item.name }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div :class="b('footer')">
      Made with Vue.js – Copyright {{ $dayjs().format('YYYY') }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-home-section-contact',
  // components: {},
  // mixins: [],

  // props: {},
  data() {
    return {
      /* eslint-disable global-require */
      /**
       * @type {Array.<Object>} Holds the list of contact items.
       */
      items: [
        {
          name: 'E-Mail',
          url: 'mailto:claudio.schaepper@me.com',
          imageSrc: require('../assets/gmail.png'),
        },
        {
          name: 'Github',
          url: 'https://github.com/claudio147',
          imageSrc: require('../assets/github-negative.png'),
        },
        {
          name: 'Instagram',
          url: 'https://www.instagram.com/claud_1o/',
          imageSrc: require('../assets/instagram.png'),
        },
        {
          name: 'Linkedin',
          url: 'https://www.linkedin.com/in/claudioschaepper/',
          imageSrc: require('../assets/linkedin.png'),
        },
        {
          name: 'Xing',
          url: 'https://www.xing.com/profile/Claudio_Schaepper/cv',
          imageSrc: require('../assets/xing.png'),
        },
      ],
    };
  },

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

  methods: {
    /**
     * Animation mousemove event.
     *
     * @param {Object} event - MouseEvent.
     */
    onWrapperMouseMove(event) {
      const { card } = this.$refs;

      const xAxis = (window.innerWidth / 2 - event.pageY) / 40;
      const yAxis = (window.innerHeight / 2 - event.pageX) / 40;

      card.style.transform = `rotateY(${yAxis}deg) rotateX(${xAxis}deg)`;
    },

    /**
     * Animation wrapper mouse leave event.
     */
    onWrapperMouseLeave() {
      const { card } = this.$refs;

      card.style.transform = 'rotateY(0deg) rotateX(0deg)';
      card.style.transition = 'all 500ms ease';
    },

    /**
     * Animation mouse enter event.
     */
    onWrapperMouseEnter() {
      const { card } = this.$refs;

      card.style.transition = 'none';
    },
  },
  // render() {},
};
</script>

<style lang="scss">
  .c-home-section-contact {
    @extend %home-layout;

    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    perspective: 1000px;

    @include media(sm) {
      align-items: center;
    }

    &__wrapper {
      @include font($font-size--36);

      margin-top: $spacing--50;

      @include media(sm) {
        max-width: 70vw;
        max-height: 70vh;
        margin-top: 0;
      }

      @include media(lg) {
        max-width: 500px;
      }
    }

    &__card {
      @include font($font-size--14);

      position: relative;
      max-width: 100%;
      transform-style: preserve-3d;
      transform-origin: center center;
      transition: all 500ms ease;

      @include media(sm) {
        @include font($font-size--18);

        max-width: 60vw;
        max-height: 60vw;
        padding: $spacing--40 $spacing--10;
        margin: $spacing--40 $spacing--80;
      }

      @include media(md) {
        margin: $spacing--50 $spacing--100;
      }
    }

    &__phone-background {
      object-fit: cover;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      max-width: 100%;
      box-shadow: 10px 10px 200px 0 $color-primary--1;
      z-index: -1;
      border-radius: 50px;

      @include media($down:xs) {
        display: none;
      }
    }

    &__title {
      @include font($font-size--36, 36px, $font-weight--bold);

      color: $color-primary--1;
      width: 100%;

      @include media(sm) {
        @include font($font-size--52, 52px, $font-weight--bold);

        text-align: center;
      }
    }

    &__list {
      @extend %list-reset;

      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin-top: $spacing--50;

      @include media(sm) {
        margin-top: $spacing--100;
      }
    }

    &__list-item {
      flex: 1 0 50%;
      max-width: 50%;
      padding: $spacing--10 $spacing--50;

      @include media(sm) {
        padding: $spacing--20 $spacing--50;
      }
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }

    &__wrapper:hover &__image {
      filter: grayscale(0)
    }

    &__link:hover &__link-text {
      border-bottom: 2px solid $color-grayscale--1000;
    }

    &__image {
      transition: filter 500ms ease;
      max-width: 100%;

      @include media(sm) {
        filter: grayscale(95%);
      }
    }

    &__link-text {
      display: block;
      margin-top: $spacing--10;
      text-align: center;
      color: $color-grayscale--1000;
      border-bottom: 2px solid transparent;
      white-space: nowrap;
    }

    &__footer {
      @include font($font-size--12, 12px, $font-weight--regular);

      position: absolute;
      bottom: 5px;
      left: 50%;
      transform: translateX(-50%);
      width: 100%;
      text-align: center;

      @include media(sm) {
        @include font($font-size--18, 18px, $font-weight--regular);

        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }
</style>
