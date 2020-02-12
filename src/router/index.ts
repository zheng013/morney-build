import Vue from 'vue';
import VueRouter from 'vue-router';
import Labels from '@/views/Labels.vue';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Notfound from '@/views/Notfound.vue';
import EditLabels from '@/views/EditLabels.vue';

Vue.use(VueRouter);


const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/labels',
    component: Labels,
  },
  {
    path: '/labels/edit/:id',
    component: EditLabels,
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '*',
    component: Notfound
  }
];

const router = new VueRouter({
  routes
});

export default router;
