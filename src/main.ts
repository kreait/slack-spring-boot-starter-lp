import Vue from 'vue';

import router from '@/router';

import App from '@/App.vue';
import VueAnalytics from 'vue-ua'

const NowUiKit = require('@/plugins/now-ui-kit');
import CodeCarousel from '@/layout/CodeCarousel.vue';

Vue.use(NowUiKit);
Vue.use(VueAnalytics, {
  // [Required] The name of your app as specified in Google Analytics.
  appName: 'Slack Spring Boot Starter',
  // [Required] The version of your app.
  appVersion: '1',
  // [Required] Your Google Analytics tracking ID.
  trackingId: 'UA-82654714-4',
  // If you're using vue-router, pass the router instance here.
  vueRouter: router,
})
Vue.config.productionTip = false;
Vue.component('CodeCarousel', CodeCarousel)


new Vue({
  components: {

  },
  router,
  render: (h) => h(App),
}).$mount('#app');
