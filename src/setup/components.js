// Elements
import eIcon from '@/components/e-icon';

require.context('@/components', false, /\.scss/);

export default {
  install(Vue) {
    const components = [
      eIcon,
    ];

    // This improves component usage in PhpStorm, while keeping optimized import in production
    if (process.env.NODE_ENV === 'production') {
      components.forEach((component) => {
        Vue.component(component.name, component);
      });
    } else {
      // Elements
      Vue.component(eIcon.name, eIcon);
    }
  },
};
