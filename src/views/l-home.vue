<template>
  <div :class="b()">
    <full-page ref="fullpage"
               :options="options"
               id="fullpage">
      <section v-for="item in $store.getters.getNavigationItems"
               :key="item.id"
               :id="item.id"
               class="section">
        <component :is="item.component" />
      </section>
    </full-page>
  </div>
</template>

<script>
import cHomeSectionHome from '@/components/c-home-section-home';
import cHomeSectionMe from '@/components/c-home-section-me';
import cHomeSectionWork from '@/components/c-home-section-work';
import cHomeSectionContact from '@/components/c-home-section-contact';

export default {
  name: 'l-home',
  components: {
    cHomeSectionWork,
    cHomeSectionMe,
    cHomeSectionHome,
    cHomeSectionContact,
  },
  // mixins: [],

  // props: {},
  data() {
    return {
      options: {
        afterLoad: this.afterLoad,
        onLeave: this.onLeave,
      },
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
    afterLoad() {
      this.$fullPageScroll.home = this.$refs.fullpage;
    },

    onLeave(from, to) {
      const { index } = to || {};

      this.$fullPageScroll.homeIndex = index;
    },
  },
  // render() {},
};
</script>

<style lang="scss">
.l-home {
}
</style>
