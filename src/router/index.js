import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    {
        path: "/new-workout",
        name: "new-workout",
        component: () => import(/* webpackChunkName: "new-workout" */ "../views/NewWorkout.vue"),
    },
    {
        path: "/options",
        name: "options",
        component: () => import(/* webpackChunkName: "options" */ "../views/Options.vue"),
    },
    {
        path: "/progress",
        name: "progress",
        component: () => import(/* webpackChunkName: "progress" */ "../views/Progress.vue"),
    },
    {
        path: "/history",
        name: "history",
        component: () => import(/* webpackChunkName: "history" */ "../views/History.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
