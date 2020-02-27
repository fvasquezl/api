
require('./bootstrap');

window.Vue = require('vue');

import Vuetify from 'vuetify';
Vue.use(Vuetify);

Vue.component('AppHome', require('./components/AppHome.vue').default);

import router from './Router/router.js';

const app = new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    router,
});
