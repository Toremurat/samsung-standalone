import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import PromoList from "@/views/PromoList.vue";
import PromoPage from "@/views/PromoPage.vue";
import contactPage from "@/views/contactPage.vue";

const routes = [{
        path: '/',
        name: 'Home page',
        component: MainPage,
    },
    {
        path: '/contacts/',
        name: 'Contacts page',
        component: contactPage,
    },
    {
        path: '/promo/',
        name: 'Promos list',
        component: PromoList,
    },
    {
        path: '/promo/:link',
        name: 'Promo page',
        component: PromoPage,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;