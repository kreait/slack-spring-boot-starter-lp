import Vue from 'vue';

import router from '@/router';

import App from '@/App.vue';

const NowUiKit = require('@/plugins/now-ui-kit');

Vue.use(NowUiKit);
Vue.config.productionTip = false;

new Vue({
  components: {

  },
  router,
  render: (h) => h(App),
}).$mount('#app');
