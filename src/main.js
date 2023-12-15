import { createApp } from "vue";
import axios from "axios";
import vueAxios from "vue-axios";
import router from "./routes.js";
import App from "./App.vue";

import "./static/styles/normalize.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./static/styles/main.scss";

const app = createApp(App);
app.use(vueAxios, axios);
app.use(router);
axios
	.get("/version")
	.then((response) => {
		const version = '?v=' + response.data.v;
		app.config.globalProperties.$v = version;
		app.mount('#app');
	})
	.catch((error) => {
		console.error("Ошибка при получении Версии:", error);
	});
