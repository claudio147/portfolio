<template>
  <div :class="b()">
    <div :class="b('block', { left: true })">
      <h1 :class="b('title')">
        Hello World!
      </h1>
    </div>
    <div :class="b('block', { right: true })">
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
    padding-right: 60px;
    padding-left: $spacing--15;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: $color-secondary--1;
    color: $color-font;

    @include media(sm) {
      padding-right: 120px;
      padding-left: $spacing--50;
    }

    &__block {
      display: flex;
      margin-bottom: 120px;

      @include media(lg) {
        padding-left: $spacing--100;
        padding-right: $spacing--100;
      }

      @include media(xl) {
        padding-left: $spacing--200;
        padding-right: $spacing--200;
      }
    }

    &__block--left {
      justify-content: flex-start;
    }

    &__block--right {
      justify-content: flex-end;
    }

    &__title {
      @include font($font-size--24);
      @include tag('h1');

      @include media(sm) {
        @include font($font-size--36);
      }

      @include media(md) {
        @include font($font-size--52);
      }
    }

    &__intro-text {
      @include font($font-size--18, 24px, $font-weight--regular);
      @include tag('p');

      max-width: 600px;

      @include media(sm) {
        @include font($font-size--24, 30px);
      }
    }
  }
</style>
