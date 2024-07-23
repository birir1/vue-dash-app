import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../pages/master/DashboardView.vue'; // Ensure this path is correct

const routes = [
  {
    name: 'Dashboard',
    path: '/',
    component: DashboardView // Use the updated component name
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
