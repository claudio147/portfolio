<template>
  <div :class="b()">
    <div :class="b('main')">
      <h1 :class="b('title')">
        Hello World!
      </h1>
      <h3 :class="b('intro-text')">
        Mich faszinieren Werte wie Design, Ästhetik und die Reduktion aufs wesentliche.
        In Bezug auf Architektur, Möbel, Kunst genauso wie im Bezug auf Web- und Printdesign.
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: 'c-home-section-home',
  // components: {},
  // mixins: [],

  // props: {},
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
  .c-home-section-home {
    width: 100vw;
    height: 100vh;
    padding-right: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-secondary--1;
    color: $color-font;

    &__main {
      display: flex;
      align-items: flex-start;
    }

    &__title {
      @include font($font-size--52);
      @include tag('h1');
    }

    &__intro-text {
      @include font($font-size--24, 30px, $font-weight--regular);
      @include tag('p');

      max-width: 600px;
      padding-top: 200px;
      margin-left: $spacing--50;
    }
  }
</style>
