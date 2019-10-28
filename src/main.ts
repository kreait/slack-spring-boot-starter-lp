import Vue from 'vue';
const VueAnalytics = require('vue-analytics').default

import router from '@/router';

import App from '@/App.vue';


const NowUiKit = require('@/plugins/now-ui-kit');
import CodeCarousel from '@/layout/CodeCarousel.vue';

Vue.use(NowUiKit);

Vue.use(VueAnalytics, {
  id: 'UA-82654714-4',
  router
})

Vue.config.productionTip = false;
Vue.component('CodeCarousel', CodeCarousel)


new Vue({
  components: {

  },
  router,
  render: (h) => h(App),
}).$mount('#app');
