// eslint-disable-next-line
import { createWebHistory, createRouter } from "vue-router";
import MainPage from "@/views/MainPage.vue";
import PromoList from "@/views/PromoList.vue";
import PromoPage from "@/views/PromoPage.vue";
import contactPage from "@/views/contactPage.vue";
import CareService from "@/views/CareService.vue";
import deliveryPage from "@/views/delivery.vue";
import ofertaPage from "@/views/oferta.vue";
import paymentPage from "@/views/payment.vue";
import returningPage from "@/views/returning.vue";
import servicePage from "@/views/service.vue";
import garantiePage from "@/views/garantie.vue";
import tradeIn from "@/views/trade-in.vue";
import smartBonus from "@/views/smartBonus.vue";
import ProductInfo from "@/views/productInfo.vue";
import ourStore from "@/views/ourStore.vue";
import NotFound from "@/views/NotFound.vue";
const routes = [
	{
		path: "/",
		name: "Home page",
		component: MainPage,
		meta: {
			title: "Фирменный магазин Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/contacts/",
		name: "Contacts page",
		component: contactPage,
		meta: {
			title: "Контакты фирменного магазина Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/promo/",
		name: "Promos list",
		component: PromoList,
		meta: {
			title: "Скидки и акции в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Большие скидки, выгодные предложения и акции в фирменном магазине Samsung",
			description:
				"Большие скидки, выгодные предложения и акции в фирменном магазине Samsung",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/promo/:link",
		name: "Promo page",
		component: PromoPage,
		meta: () => {
			return {
				title: "Акция в фирменном магазине Samsung",
				ogUrl: "https://smbrand.kz",
				ogImage: "/static/image/ogLogo.webp",
				ogDescription:
					"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
				description:
					"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
				keywords:
					"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
			};
		},
		// beforeEnter: async (to, from, next) => {
		// 	const linkParam = to.params.link;
		// 	try {
		// 		const response = await axios.get("/api/main.json");
		// 		const matchingData = response.data.find(
		// 			(item) =>
		// 				item.link.substring(item.link.indexOf("promo/") + 6) ===
		// 				linkParamfF
		// 		);
		// 		if (matchingData) {
		// 			next();
		// 		} else {
		// 			next({ name: "NotFound" });
		// 		}
		// 	} catch (error) {
		// 		console.error(error);
		// 		next({ name: "NotFound" }); 
		// 	}
		// },
	},
	{
		path: "/product/:link",
		name: "Product page",
		component: ProductInfo,
		meta: () => {
			return {
				title: "Акция в фирменном магазине Samsung",
				ogUrl: "https://smbrand.kz",
				ogImage: "/static/image/ogLogo.webp",
				ogDescription:
					"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
				description:
					"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
				keywords:
					"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
			};
		},
	},
	{
		path: "/care-service",
		name: "Care service",
		component: CareService,
		meta: {
			title: "Служба заботы фирменного магазина Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Служба заботы фирменного магазина Samsung всегда поможет решить вопросы, возникшие у вас при обслуживании",
			description:
				"Служба заботы фирменного магазина Samsung всегда поможет решить вопросы, возникшие у вас при обслуживании",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/payment",
		name: "Оплата",
		component: paymentPage,
		meta: {
			title: "Оплата в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/delivery",
		name: "Доставка",
		component: deliveryPage,
		meta: {
			title: "Доставка в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/return-and-exchange",
		name: "Возврат и обмен",
		component: returningPage,
		meta: {
			title: "Возврат и обмен в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/service",
		name: "Сервис",
		component: servicePage,
		meta: {
			title: "Сервис в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
	},
	{
		path: "/guarantee",
		name: "garantiePage",
		meta: {
			title: "Гарантия низкой цены в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
		component: garantiePage,
	},
	{
		path: "/trade-in",
		name: "tradeIn",
		meta: {
			title: "Trade in в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
		component: tradeIn,
	},
	{
		path: "/smart-bonus",
		name: "smartBonus",
		meta: {
			title: "Smart Bonus низкой цены в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
		component: smartBonus,
	},
	{
		path: "/public-policy",
		name: "Публичная оферта",
		meta: {
			title: "Оферта в фирменном магазине Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
		component: ofertaPage,
	},
	{
		path: "/about-store",
		name: "О магазине",
		meta: {
			title: "Добро пожаловать в первый фирменный магазин Samsung",
			ogUrl: "https://smbrand.kz",
			ogImage: "/static/image/ogLogo.webp",
			ogDescription:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			description:
				"Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
			keywords:
				"Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip",
		},
		component: ourStore,
	},
	// eslint-disable-next-line
	{ path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
	history: createWebHistory(),
	routes, // eslint-disable-next-line
	scrollBehavior() {
		// always scroll to top
		return { el: "#app", top: 200, behavior: "smooth" };
	},
});

router.beforeEach((to, from, next) => {
	const nearestWithTitle = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.title);
	const nearestWithMeta = to.matched
		.slice()
		.reverse()
		.find((r) => r.meta && r.meta.metaTags);

	if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

	Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
		(el) => el.parentNode.removeChild(el)
	);

	if (!nearestWithMeta) return next();

	nearestWithMeta.meta.metaTags
		.map((tagDef) => {
			const tag = document.createElement("meta");

			Object.keys(tagDef).forEach((key) => {
				tag.setAttribute(key, tagDef[key]);
			});

			tag.setAttribute("data-vue-router-controlled", "");

			return tag;
		})
		.forEach((tag) => document.head.appendChild(tag));

	next();
});
export default router;
