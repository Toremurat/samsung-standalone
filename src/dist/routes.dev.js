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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var routes = [{
  path: '/',
  name: 'Home page',
  component: _MainPage["default"]
}, {
  path: '/contacts/',
  name: 'Contacts page',
  component: _contactPage["default"]
}, {
  path: '/promo/',
  name: 'Promos list',
  component: _PromoList["default"]
}, {
  path: '/promo/:link',
  name: 'Promo page',
  component: _PromoPage["default"]
}];
var router = (0, _vueRouter.createRouter)({
  history: (0, _vueRouter.createWebHistory)(),
  routes: routes
});
var _default = router;
exports["default"] = _default;