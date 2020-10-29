<template>
  <div :class="b()">
    <img :class="b('image')" src="../assets/claudio-portrait.png" alt="Claudio Schäpper Portrait">

    <c-circle-buzzer :items="navigationItems" active-item="skills" />
  </div>
</template>

<script>
import cCircleBuzzer from '@/components/c-circle-buzzer';

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
      navigationItems: [
        {
          id: 'interests',
          label: 'Interessen',
        },
        {
          id: 'technologies',
          label: 'Technologien',
        },
        {
          id: 'experience',
          label: 'Weg',
        },
        {
          id: 'skills',
          label: 'Skills',
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
  .c-home-section-me {
    @extend %home-layout;

    &__image {
      position: absolute;
      bottom: 0;
      max-height: 80vh;
    }

    .c-circle-buzzer {
      position: absolute;
      left: 50%;
      top: 200px;
    }
  }
</style>
