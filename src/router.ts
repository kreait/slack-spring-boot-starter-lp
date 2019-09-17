import Vue from 'vue';
import Router from 'vue-router';
const  Landing =require('@/pages/Landing').default;
const MainNavbar =require('@/layout/MainNavbar').default;
const MainFooter =require('@/layout/MainFooter.vue').default;
const  Starter =require('@/pages/StarterPage').default;
const  ApiIndex =require('@/pages/ApiDocumentationIndexPage').default;


export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      components: { default: Landing, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      },
    },
    {
      path: '/guides/:guideId',
      name: 'guides',
      components: { default: Starter, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      },
    },
    {
      path: '/docs/latest/api',
      name: 'guides',
      components: { default: ApiIndex, header: MainNavbar, footer: MainFooter },
      props: {
        header: { colorOnScroll: 0 },
        footer: { backgroundColor: 'black' },
      },
    },
  ],
  scrollBehavior: to => {
    if (to.hash) {
      return { selector: to.hash };
    } else {
      return { x: 0, y: 0 };
    }
  }
});
Vue.use(Router);
