import { createApp } from 'vue'
import BootstrapVue3 from 'bootstrap-vue-3'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
import './styles/main.scss'

const app = createApp(App)
app
    .use(BootstrapVue3)
    .mount('#app')
    .use(VueAxios, axios)
    .provide('axios', app.config.globalProperties.axios)