import { createApp } from 'vue';
import App from './App.vue';
//Importo le rotte
import { router } from './router';

//bootstrap
// import 'bootstrap/dist/css/bootstrap.min.css'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App).use(router).mount('#app');
