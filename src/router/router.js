import {createRouter, createWebHistory} from "vue-router";

import MainLayout from "@/layout/main-layout.vue";
import AuthLayout from "@/layout/auth-layout.vue";
import HomePage from "@/pages/home-page.vue";
import AuthLogin from "@/pages/authentication/auth-login.vue";

const routes = [
    {
        path: '/', name: 'MainLayout', component: MainLayout,
        children: [
            {path: '', name: 'HomePage', component: HomePage, meta: {name: 'Homepage'}},
        ]
    },

    {
        path: '/auth', name: 'AuthLayout', component: AuthLayout,
        children: [
            {path: 'login', name: 'AuthLogin', component: AuthLogin, meta: {name: 'Login'}},
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;