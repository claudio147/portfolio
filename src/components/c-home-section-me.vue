<template>
  <div :class="b()">
    <img :class="b('image')" src="../assets/claudio-portrait.png" alt="Claudio Schäpper Portrait">
  </div>
</template>

<script>
export default {
  name: 'c-home-section-me',
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
  .c-home-section-me {
    @extend %home-layout;

    &__image {
      position: absolute;
      bottom: 0;
      max-height: 80vh;
    }
  }
</style>
