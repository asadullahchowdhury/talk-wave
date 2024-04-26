import {createRouter, createWebHistory} from "vue-router";

import MainLayout from "@/layout/main-layout.vue";
import AuthLayout from "@/layout/auth-layout.vue";
import ChatLayout from "@/layout/chat-layout.vue";
import HomePage from "@/pages/home-page.vue";
import AuthLogin from "@/pages/authentication/auth-login.vue";
import AuthRegister from "@/pages/authentication/auth-register.vue";
import AuthForgot from "@/pages/authentication/auth-forgot.vue";
import AuthReset from "@/pages/authentication/auth-reset.vue";
import ChatInbox from "@/pages/conversation/chat-inbox.vue";

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
            {path: 'register', name: 'AuthRegister', component: AuthRegister, meta: {name: 'Signup'}},
            {path: 'forgot', name: 'AuthForgot', component: AuthForgot, meta: {name: 'Forgot password'}},
            {path: 'reset', name: 'AuthReset', component: AuthReset, meta: {name: 'Reset password'}},
        ]
    },
    {
        path: '/inbox', name: 'ChatLayout', component: ChatLayout,
        children: [
            {path: '', name: 'ChatInbox', component: ChatInbox, meta: {name: 'Inbox'}},
        ]
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;