const clickOutside = require("../directives/click-ouside").default;
/**
 * You can register global directives here and use them as a plugin in your main Vue instance
 */
export default {
  install(Vue) {
    Vue.directive('click-outside', clickOutside);
  }
}
