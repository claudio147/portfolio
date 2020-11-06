<template>
  <div :class="b()">
    <div :class="b('wrapper')">
      <div :class="b('container')">
        <h1 :class="b('title')">Get in touch</h1>
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

  // methods: {},
  // render() {},
};
</script>

<style lang="scss">
  .c-home-section-contact {
    @extend %home-layout;

    display: flex;
    align-items: center;
    justify-content: center;

    &__wrapper {
      @include tag('form');
      @include font($font-size--36);
    }

    &__container {
      @include font($font-size--18);

      padding: $spacing--50;
      border: 1px solid $color-primary--1;
      box-shadow: inset 0px 0px 15px 0px $color-primary--1;
      min-width: 50vw;
      min-height: 300px;
      margin: $spacing--10 0 $spacing--10 $spacing--50;
    }

    &__title {
      @include font($font-size--52, 52px, $font-weight--bold);

      color: $color-primary--1;
      width: 100%;
    }

    &__list {
      @extend %list-reset;

      display: flex;
      flex-wrap: wrap;
      margin-top: $spacing--100;
    }

    &__list-item {
      flex: 1 0 120px;
      max-width: 120px;
      margin-right: $spacing--40;
    }

    &__link {
      display: flex;
      flex-direction: column;
      align-items: center;
      max-width: 100%;
    }

    &__link:hover &__image {
      filter: grayscale(0)
    }

    &__link:hover &__link-text {
      border-bottom: 2px solid $color-primary--1;
    }

    &__image {
      max-width: 100%;
      filter: grayscale(95%)
    }

    &__link-text {
      display: block;
      margin-top: $spacing--10;
      text-align: center;
      color: $color-font;
      border-bottom: 2px solid transparent;
    }

    &__footer {
      position: absolute;
      bottom: 30px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
</style>
