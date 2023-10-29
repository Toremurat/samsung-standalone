import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
// import promoPage from "@/views/promoPage.vue";

const routes = [
  {
    path: '/',
    name: 'Home page',
    component: MainPage,
  },
  // {
  //   path: '/promo/',
  //   name: 'Promo list',
  //   component: PromoList,
  // },
	// {
  //   path: '/promo/:id',
  //   name: 'Promo page',
  //   component: PromoPage,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;