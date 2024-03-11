import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LogInView from "@/views/LogInView";
import BuyTicketView from "@/views/BuyTicketView";


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
{
    path: '/ticket',
    name: 'ticket',
    component: BuyTicketView
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;