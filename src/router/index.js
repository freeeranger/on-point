import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/options",
        name: "options",
        component: () => import(/* webpackChunkName: "options" */ "../views/Options.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
