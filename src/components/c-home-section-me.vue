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
              title: 'Laufen',
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
          label: 'Weg',
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
              title: 'Planungseiter- / Hochbauzeichner',
              subTitle: 'AF Architektur | 2015',
            },
          ],
        },
        {
          id: 'skills',
          label: 'Skills',
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
      max-height: 80vh;
      filter: grayscale(20%) saturate(50%) drop-shadow(10px 10px 150px rgba(#34e4cb, 0.8));
    }

    &__image--color-mode-light {
      filter: grayscale(70%) saturate(90%) drop-shadow(20px 20px 150px rgba(#ff9c08, 1));
    }

    &__wrapper {
      padding-left: 50vw;
      padding-top: 150px;
    }

    &__content {
      margin-top: 100px;
    }

    &__list {
      @extend %list-reset;
      @include font($font-size--24);
      @include tag('ul');
    }

    &__list-item {
      display: block;
      padding-left: $spacing--40;
    }

    &__list-title,
    &__list-subtitle {
      display: block;
    }

    &__list-subtitle {
      @include font($font-size--16, 16px);

      padding-left: $spacing--20;
      color: $color-primary--1;
      margin-bottom: $spacing--10;
    }
  }
</style>
