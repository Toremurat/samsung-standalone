"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vueRouter = require("vue-router");

var _MainPage = _interopRequireDefault(require("@/views/MainPage.vue"));

var _PromoList = _interopRequireDefault(require("@/views/PromoList.vue"));

var _PromoPage = _interopRequireDefault(require("@/views/PromoPage.vue"));

var _contactPage = _interopRequireDefault(require("@/views/contactPage.vue"));

var _CareService = _interopRequireDefault(require("@/views/CareService.vue"));

var _delivery = _interopRequireDefault(require("@/views/delivery.vue"));

var _oferta = _interopRequireDefault(require("@/views/oferta.vue"));

var _payment = _interopRequireDefault(require("@/views/payment.vue"));

var _returning = _interopRequireDefault(require("@/views/returning.vue"));

var _service = _interopRequireDefault(require("@/views/service.vue"));

var _garantie = _interopRequireDefault(require("@/views/garantie.vue"));

var _tradeIn = _interopRequireDefault(require("@/views/trade-in.vue"));

var _smartBonus = _interopRequireDefault(require("@/views/smartBonus.vue"));

var _productInfo = _interopRequireDefault(require("@/views/productInfo.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// eslint-disable-next-line
var routes = [{
  path: "/",
  name: "Home page",
  component: _MainPage["default"],
  meta: {
    title: "Фирменный магазин Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/contacts/",
  name: "Contacts page",
  component: _contactPage["default"],
  meta: {
    title: "Контакты фирменного магазина Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/promo/",
  name: "Promos list",
  component: _PromoList["default"],
  meta: {
    title: "Скидки и акции в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Большие скидки, выгодные предложения и акции в фирменном магазине Samsung",
    description: "Большие скидки, выгодные предложения и акции в фирменном магазине Samsung",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/promo/:link",
  name: "Promo page",
  component: _PromoPage["default"],
  meta: function meta() {
    return {
      title: "Акция в фирменном магазине Samsung",
      ogUrl: "https://smbrand.kz",
      ogImage: "/static/image/ogLogo.webp",
      ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
      description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
      keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
    };
  }
}, {
  path: "/product/:link",
  name: "Product page",
  component: _productInfo["default"],
  meta: function meta() {
    return {
      title: "Акция в фирменном магазине Samsung",
      ogUrl: "https://smbrand.kz",
      ogImage: "/static/image/ogLogo.webp",
      ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
      description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
      keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
    };
  }
}, {
  path: "/care-service",
  name: "Care service",
  component: _CareService["default"],
  meta: {
    title: "Служба заботы фирменного магазина Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Служба заботы фирменного магазина Samsung всегда поможет решить вопросы, возникшие у вас при обслуживании",
    description: "Служба заботы фирменного магазина Samsung всегда поможет решить вопросы, возникшие у вас при обслуживании",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/payment",
  name: "Оплата",
  component: _payment["default"],
  meta: {
    title: "Оплата в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/delivery",
  name: "Доставка",
  component: _delivery["default"],
  meta: {
    title: "Доставка в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/return-and-exchange",
  name: "Возврат и обмен",
  component: _returning["default"],
  meta: {
    title: "Возврат и обмен в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/service",
  name: "Сервис",
  component: _service["default"],
  meta: {
    title: "Сервис в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  }
}, {
  path: "/guarantee",
  name: "garantiePage",
  meta: {
    title: "Гарантия низкой цены в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  },
  component: _garantie["default"]
}, {
  path: "/trade-in",
  name: "tradeIn",
  meta: {
    title: "Trade in в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  },
  component: _tradeIn["default"]
}, {
  path: "/smart-bonus",
  name: "smartBonus",
  meta: {
    title: "Гарантия низкой цены в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  },
  component: _smartBonus["default"]
}, {
  path: "/public-policy",
  name: "Публичная оферта",
  meta: {
    title: "Оферта в фирменном магазине Samsung",
    ogUrl: "https://smbrand.kz",
    ogImage: "/static/image/ogLogo.webp",
    ogDescription: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    description: "Добро пожаловать в первый магазин Samsung в Казахстане. Вся линейка техники Samsung в одном магазине, где вас ждет превосходное обслуживание и экспертное сопровождение.",
    keywords: "Samsung, Samsung Dostyk Plaza, Фирменный магазин Samsung, Samsung Казахстан, Galaxy, Bespoke, Fold, Flip"
  },
  component: _oferta["default"]
} // eslint-disable-next-line
// { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes,
  // eslint-disable-next-line
  scrollBehavior: function scrollBehavior() {
    // always scroll to top
    return {
      el: "#app",
      top: 200,
      behavior: "smooth"
    };
  }
});
router.beforeEach(function (to, from, next) {
  var nearestWithTitle = to.matched.slice().reverse().find(function (r) {
    return r.meta && r.meta.title;
  });
  var nearestWithMeta = to.matched.slice().reverse().find(function (r) {
    return r.meta && r.meta.metaTags;
  });
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(function (el) {
    return el.parentNode.removeChild(el);
  });
  if (!nearestWithMeta) return next();
  nearestWithMeta.meta.metaTags.map(function (tagDef) {
    var tag = document.createElement("meta");
    Object.keys(tagDef).forEach(function (key) {
      tag.setAttribute(key, tagDef[key]);
    });
    tag.setAttribute("data-vue-router-controlled", "");
    return tag;
  }).forEach(function (tag) {
    return document.head.appendChild(tag);
  });
  next();
});
var _default = router;
exports["default"] = _default;