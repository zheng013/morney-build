import Vue from 'vue';
import VueRouter from 'vue-router';
import Labels from '@/views/Labels.vue';
import Money from '@/views/Money.vue';
import Statistics from '@/views/Statistics.vue';
import Notfound from '@/views/Notfound.vue';

Vue.use(VueRouter);


const routes = [
    {
        path: '/',
        redirect: '/Money'
    },
    {
        path: '/Money',
        component: Money
    },
    {
        path: '/labels',
        component: Labels,
    },
    {
        path: '/statistics',
        component: Statistics
    },
    {
        path:'*',
        component:Notfound
    }
];

const router = new VueRouter({
    routes
});

export default router;
