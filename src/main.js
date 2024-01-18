import { createApp } from 'vue';
import App from './App.vue';
//Importo le rotte
import { router } from './router';

import 'swiper/swiper-bundle.css';

//bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app');
