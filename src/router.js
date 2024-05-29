import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import AboutPage from '@/views/AboutPage.vue';
import EducationPage from '@/views/EducationPage.vue';
import SkillsPage from '@/views/SkillsPage.vue';
import ExperiencePage from '@/views/ExperiencePage.vue';
import ContactPage from '@/views/ContactPage.vue';
import EngagementPage from '@/views/EngagementPage.vue';

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
      path: '/contact',
      name: 'ContactPage',
      component: ContactPage
    },
    {
      path: '/engagement',
      name: 'EngagementPage',
      component: EngagementPage
    },
    {
      path: '*',  // Wildcard route to handle unknown routes
      redirect: '/'
    }
  ]
});
