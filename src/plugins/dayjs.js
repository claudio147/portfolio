import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
// import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
// import isSameOrAfter from 'dayjs/plugin/isSameOrAfter';
// import isBetween from 'dayjs/plugin/isBetween';
// import localeData from 'dayjs/plugin/localeData';

export default {
  install(Vue /* , options */) {
    dayjs.extend(customParseFormat);
    // dayjs.extend(isSameOrBefore);
    // dayjs.extend(isSameOrAfter);
    // dayjs.extend(isBetween);
    // dayjs.extend(localeData);

    // eslint-disable-next-line global-require
    dayjs.locale('de-ch', require('dayjs/locale/de'));

    // eslint-disable-next-line no-param-reassign
    Vue.prototype.$dayjs = dayjs;
  },
};
