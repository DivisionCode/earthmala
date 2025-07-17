import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('@/pages/Home.vue'),
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('@/pages/Products.vue'),
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('@/pages/About.vue'),
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});