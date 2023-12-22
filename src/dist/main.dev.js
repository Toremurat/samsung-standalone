"use strict";

var _vue = require("vue");

var _axios = _interopRequireDefault(require("axios"));

var _vueAxios = _interopRequireDefault(require("vue-axios"));

var _routes = _interopRequireDefault(require("./routes.js"));

var _App = _interopRequireDefault(require("./App.vue"));

require("./static/styles/normalize.css");

require("bootstrap/dist/css/bootstrap.css");

require("bootstrap-vue/dist/bootstrap-vue.css");

require("./static/styles/main.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var app = (0, _vue.createApp)(_App["default"]);
app.use(_vueAxios["default"], _axios["default"]);
app.use(_routes["default"]);