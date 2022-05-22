import { nextTick } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import { supabase } from "../supabase.js";

const routes = [
    {
        path: "/",
        name: "home",
        component: () => import(/* webpackChunkName: "home" */ "../views/Home.vue"),
    },
    ,
    {
        path: "/auth",
        name: "auth",
        component: () => import(/* webpackChunkName: "auth" */ "../views/Auth.vue"),
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
    {
        path: "/workout/:id",
        name: "workout",
        component: () => import(/* webpackChunkName: "workout" */ "../views/Workout.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    // ...
    // explicitly return false to cancel the navigation

    if (!supabase.auth.session() && to.name !== "auth") {
        next({ name: "auth" });
        return;
    }

    next();
});

export default router;
