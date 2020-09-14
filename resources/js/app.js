require('./bootstrap');

window.Vue = require('vue');

import App from './components/App.vue';

import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';

import components from './components/module';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);

Vue.config.devtools = false;
Vue.config.debug = false;
Vue.config.silent = true;

const routes = [
	{
		name: 'home',
		path: '/',
		component: components.StudentData
	},
	{
		name: 'add-student',
		path: '/add',
		component: components.AddStudent
	},
	{
		name: 'edit-student',
		path: '/edit/:id',
		component: components.EditStudent
	},
];

const router = new VueRouter({
	mode: 'history',
	routes: routes
});

const app = new Vue(
	Vue.util.extend({router}, App)
).$mount('#app');
