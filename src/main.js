import { createApp } from 'vue'
import axios from 'axios'
import vueAxios from 'vue-axios'
import router from './routes.js'
import App from './App.vue'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './styles/main.scss'



const app = createApp(App)
app.use(vueAxios, axios)
app.use(router)
app.mount('#app')