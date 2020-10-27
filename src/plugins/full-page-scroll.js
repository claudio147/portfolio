export default {
  install(Vue /* , options */) {
    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$fullPageScroll = Vue.observable({
      home: null,
      homeIndex: 0,
    });
  },
};
