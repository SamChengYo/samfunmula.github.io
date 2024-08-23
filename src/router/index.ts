import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/components/Home.vue';
import Project from '@/components/Project.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Home,
    beforeEnter: (to, from, next) => {
      next();
      setTimeout(() => {
        const contactSection = document.querySelector('.contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
