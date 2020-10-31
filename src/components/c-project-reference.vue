<template>
  <div :class="b()">
    <h2 :class="b('title')">{{ project.title }}</h2>
    <div :class="b('content')">
      <div :class="b('content-left')">
        <template v-if="project.url">
          <a :class="b('image-link')" :href="project.url" :title="project.title">
            <img :class="b('image')" :src="image" :alt="project.title">
          </a>
        </template>
        <template v-else>
          <img :class="b('image')" :src="image" :alt="project.title">
        </template>
        <div :class="b('technologies')">
          <c-technologies :options="technologies" />
        </div>
        <a v-if="project.url"
           :class="b('more-button')"
           :href="project.url"
           :title="project.title"
           target="_blank">
          zum Projekt
        </a>
      </div>
      <div :class="b('content-right')">
        <dl :class="b('description')">
          <div v-for="section in description" :key="section.title">
            <dt :class="b('description-dt')">{{ section.title }}</dt>
            <dd :class="b('description-dd')">{{ section.content }}</dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import cTechnologies from '@/components/c-technologies';

/**
 * Renders a project reference.
 */
export default {
  name: 'c-project-reference',
  components: {
    cTechnologies,
  },
  // components: {},
  // mixins: [],

  props: {
    /**
     * A project element.
     */
    project: {
      type: Object,
      default: () => ({}),
    },
  },
  // data() {
  //   return {};
  // },

  computed: {
    /**
     * Gets the preview image of the project.
     *
     * @returns {String}
     */
    image() {
      const { image } = this.project || {};

      return image || '';
    },

    /**
     * Gets the technologies of the project.
     *
     * @returns {Object}
     */
    technologies() {
      const { technologies } = this.project || {};

      return technologies;
    },

    /**
     * Gets the description of the project.
     *
     * @returns {Array.<Object>}
     */
    description() {
      const { description } = this.project || {};

      return description;
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

  // methods: {},
  // render() {},
};
</script>

<style lang="scss">
.c-project-reference {
  overflow: auto;
  max-height: 100%;

  &__title {
    @include font($font-size--24, 26px, $font-weight--bold);

    color: $color-primary--1;
    margin-bottom: $spacing--30;

    @include media(sm) {
      @include font($font-size--36, 36px, $font-weight--bold);
    }
  }

  &__content {
    @include media(sm) {
      display: flex;
      height: 100%;
    }
  }

  &__content-left,
  &__content-right {
    @include media(sm) {
      flex: 1 0 50%;
      max-width: 50%;
    }
  }

  &__content-left {
    @include media(sm) {
      padding-right: $spacing--20;
    }
  }

  &__content-right {
    @include media(sm) {
      padding-left: $spacing--20;
    }
  }

  &__image {
    max-width: 100%;
    margin-bottom: $spacing--20;

    @include media(sm) {
      margin-bottom: $spacing--50;
    }
  }

  &__image-link {
    display: block;
  }

  &__description {
    @include tag('dl');

    display: none;

    @include media(sm) {
      display: block;
    }
  }

  &__description-dt {
    padding-left: $spacing--20;
  }

  &__description-dd {
    padding-left: $spacing--20;
  }

  &__more-button {
    display: block;
    text-align: center;
    padding: $spacing--10 $spacing--50;
    background-color: $color-primary--1;
    border: 1px solid transparent;
    border-radius: 50em;
    margin-top: $spacing--10;

    @include media(sm) {
      display: inline-block;
      margin-top: $spacing--50;
    }
  }
}
</style>
