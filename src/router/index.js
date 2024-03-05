import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogInView from "@/views/LogInView";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
{
    path: '/login',
    name: 'login',
    component: LogInView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;