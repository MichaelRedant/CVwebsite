import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import EducationPage from '@/views/EducationPage.vue';
import SkillsPage from '@/views/SkillsPage.vue';
import ExperiencePage from '@/views/ExperiencePage.vue';
import PortfolioPage from '@/views/PortfolioPage.vue';
import ContactPage from '@/views/ContactPage.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/about',
      name: 'AboutPage',
      component: AboutPage
    },
    {
      path: '/education',
      name: 'EducationPage',
      component: EducationPage
    },
    {
      path: '/skills',
      name: 'SkillsPage',
      component: SkillsPage
    },
    {
      path: '/experience',
      name: 'ExperiencePage',
      component: ExperiencePage
    },
    {
      path: '/portfolio',
      name: 'PortfolioPage',
      component: PortfolioPage
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    }
  ]
});
