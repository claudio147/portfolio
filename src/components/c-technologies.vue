<template>
  <ul :class="b()">
    <!-- Vue.js -->
    <li v-if="options.vue" :class="b('list-item')">
      <a :class="b('link')"
         href="https://vuejs.org/"
         title="Vue.js"
         target="_blank">
        <img :class="b('image')" src="../assets/vue.png" alt="Vue.js">
      </a>
    </li>

    <!-- Ember.js -->
    <li v-if="options.ember" :class="b('list-item')">
      <a :class="b('link')"
         href="https://emberjs.com/"
         title="Ember.js"
         target="_blank">
        <img :class="b('image')" src="../assets/ember.png" alt="Ember.js">
      </a>
    </li>

    <!-- Angular.js -->
    <li v-if="options.angular" :class="b('list-item')">
      <a :class="b('link')"
         href="https://angular.io/"
         title="Angular.io"
         target="_blank">
        <img :class="b('image')" src="../assets/angular.png" alt="Angular.io">
      </a>
    </li>

    <!-- Javascript -->
    <li v-if="options.javascript" :class="b('list-item')">
      <a :class="b('link')"
         href="http://es6-features.org/"
         title="Javascript ES6"
         target="_blank">
        <img :class="b('image')" src="../assets/javascript.png" alt="Javascript ES6">
      </a>
    </li>

    <!-- HTML -->
    <li v-if="options.html" :class="b('list-item')">
      <a :class="b('link')"
         href="https://www.w3.org/TR/html5-diff/"
         title="HTML"
         target="_blank">
        <img :class="b('image')" src="../assets/html.png" alt="HTML">
      </a>
    </li>

    <!-- SCSS -->
    <li v-if="options.scss" :class="b('list-item')">
      <a :class="b('link')"
         href="https://sass-lang.com/"
         title="SASS"
         target="_blank">
        <img :class="b('image')" src="../assets/sass.png" alt="SASS">
      </a>
    </li>

    <!-- Wordpress -->
    <li v-if="options.wordpress" :class="b('list-item')">
      <a :class="b('link')"
         href="https://de.wordpress.com/"
         title="Wordpress"
         target="_blank">
        <img :class="b('image')" src="../assets/wordpress.png" alt="Wordpress">
      </a>
    </li>

    <!-- Hybris -->
    <li v-if="options.hybris" :class="b('list-item')">
      <a :class="b('link')"
         href="https://www.sap.com/swiss/products/crm/e-commerce-platforms.html"
         title="SAP Hybris"
         target="_blank">
        <img :class="b('image')" src="../assets/hybris.png" alt="SAP Hybris">
      </a>
    </li>

    <!-- Pimcore -->
    <li v-if="options.pimcore" :class="b('list-item')">
      <a :class="b('link')"
         href="https://pimcore.com/de"
         title="Pimcore"
         target="_blank">
        <img :class="b('image')" src="../assets/pimcore.png" alt="Pimcore">
      </a>
    </li>

    <!-- Spryker -->
    <li v-if="options.spryker" :class="b('list-item')">
      <a :class="b('link')"
         href="https://spryker.com/de/"
         title="Spryker"
         target="_blank">
        <img :class="b('image')" src="../assets/spryker.png" alt="Spryker">
      </a>
    </li>
  </ul>
</template>

<script>

/**
 * This component renders technology links with icon.
 */
export default {
  name: 'c-technologies',
  // components: {},
  // mixins: [],

  props: {
    /**
     * The options with the active technologies.
     */
    options: {
      type: Object,
      default: () => ({}),
    },
  },
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
.c-technologies {
  @extend %list-reset;

  display: flex;
  flex-wrap: wrap;

  &__list-item {
    flex: 1 0 30px;
    max-width: 30px;
    margin-right: $spacing--10;
    margin-bottom: $spacing--10;

    @include media(sm) {
      flex: 1 0 50px;
      max-width: 50px;
      margin-right: $spacing--15;
      margin-bottom: $spacing--15;
    }
  }

  &__link {
    display: block;
  }

  &__image {
    max-width: 100%;
    filter: grayscale(80%)
  }

  &__image:hover {
    filter: grayscale(0)
  }
}
</style>
