<template>
  <div :class="b()">
    <img :class="b('image', { colorMode: $store.getters.getColorMode })"
         src="../assets/claudio-03.png"
         alt="Claudio Schäpper Portrait">
    <div :class="b('wrapper')">
      <c-circle-buzzer :items="navigationItems"
                       :active-item="activeItem"
                       @click="onClickItem"
      />
      <div :class="b('content')">
        <ul :class="b('list')">
          <li v-for="(item, index) in activeObject.content"
              :key="`${item.title}${index}`"
              :class="b('list-item')">
            <span :class="b('list-title')">{{ item.title }}</span>
            <span :class="b('list-subtitle')">{{ item.subTitle }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import cCircleBuzzer from '@/components/c-circle-buzzer';

/**
 * This Section renders facts about me.
 */
export default {
  name: 'c-home-section-me',
  components: {
    cCircleBuzzer,
  },
  // components: {},
  // mixins: [],

  // props: {},
  data() {
    return {
      /**
       * @type {Array.<Object>} Holds the navigation with it's content inside.
       */
      navigationItems: [
        {
          id: 'interests',
          label: 'Interessen',
          icon: 'i-interests',
          content: [
            {
              title: 'Reisen',
            },
            {
              title: 'Tauchen',
            },
            {
              title: 'Squash',
            },
            {
              title: 'Wandern',
            },
            {
              title: 'Kochen / Essen',
            },
          ],
        },
        {
          id: 'technologies',
          label: 'Technologien',
          icon: 'i-technologies',
          content: [
            {
              title: 'Vue.js',
              subTitle: 'Expert level',
            },
            {
              title: 'Ember.js',
              subTitle: 'Expert level',
            },
            {
              title: 'Angular.js',
              subTitle: 'Basic level',
            },
            {
              title: 'Javascript',
              subTitle: 'ES6',
            },
            {
              title: 'CSS / SCSS',
            },
            {
              title: 'HTML5',
            },
          ],
        },
        {
          id: 'experience',
          icon: 'i-career',
          label: 'Karriere',
          content: [
            {
              title: 'Senior Frontend Engineer',
              subTitle: 'Valantic CEC Schweiz AG | Now',
            },
            {
              title: 'Web- Praktikum',
              subTitle: 'Horisen AG | 2016',
            },
            {
              title: 'Hochbauzeichner',
              subTitle: 'AF Architektur | 2015',
            },
          ],
        },
        {
          id: 'skills',
          label: 'Skills',
          icon: 'i-skills',
          content: [
            {
              title: 'Frontend Development',
              subTitle: '~99%',
            },
            {
              title: 'Project management',
              subTitle: '~70%',
            },
            {
              title: 'UI / UX',
              subTitle: '~50%',
            },
            {
              title: 'PHP / Java',
              subTitle: '~5%',
            },
          ],
        },
      ],

      /**
       * @type {String} Holds the active navigation item.
       */
      activeItem: 'technologies',
    };
  },

  computed: {
    /**
     * Gets the current active navigation object.
     *
     * @returns {Object}
     */
    activeObject() {
      return this.navigationItems.find((item) => item.id === this.activeItem);
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
     * Click circle item event handler.
     *
     * @param {String} id - The id of the selected item.
     */
    onClickItem(id) {
      this.activeItem = id;
    },
  },
  // render() {},
};
</script>

<style lang="scss">
  .c-home-section-me {
    @extend %home-layout;

    &__image {
      position: absolute;
      bottom: 0;
      max-height: 30vh;
      filter: grayscale(20%) saturate(50%) drop-shadow(10px 10px 150px rgba(#34e4cb, 0.8));
      left: 140px;

      @include media(xs) {
        max-height: 50vh;
        left: $spacing--100;
      }

      @include media(sm) {
        max-height: 60vh;
        left: -150px;
      }

      @include media(md) {
        max-height: 80vh;
      }

      @include media(lg) {
        left: 0;
      }
    }

    &__image--color-mode-light {
      filter: grayscale(70%) saturate(90%) drop-shadow(20px 20px 150px rgba(#ff9c08, 1));
    }

    &__wrapper {
      padding-top: $spacing--40;

      @include media(sm) {
        padding-left: 150px;
        padding-top: 50px;
      }

      @include media(md) {
        padding-left: 35vw;
        padding-top: 60px;
      }

      @include media(lg) {
        padding-left: 50vw;
        padding-top: 60px;
      }
    }

    &__content {
      margin-top: $spacing--50;

      @include media(lg) {
        margin-top: 100px;
      }
    }

    &__list {
      @extend %list-reset;
      @include font($font-size--16);
      @include tag('ul');

      @include media(sm) {
        @include font($font-size--18);
      }

      @include media(md) {
        @include font($font-size--20);
      }

      @include media(lg) {
        @include font($font-size--24);
      }
    }

    &__list-item {
      display: block;

      @include media(sm) {
        padding-left: $spacing--40;
      }
    }

    &__list-title,
    &__list-subtitle {
      display: block;
    }

    &__list-subtitle {
      @include font($font-size--12, 12px);

      padding-left: $spacing--20;
      color: $color-primary--1;
      margin-bottom: $spacing--10;

      @include media(sm) {
        @include font($font-size--16, 16px);
      }
    }

    .c-circle-buzzer {
      width: 150px;
      height: 150px;

      @include media(xs) {
        width: 250px;
        height: 250px;
      }

      @include media(sm) {
        width: 300px;
        height: 300px;
      }
    }
  }
</style>
