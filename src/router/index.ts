import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import * as Config from "../../vue.config.js";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",
	base: Config.publicPath,

	routes: [
		{
			path: "/",
			name: "Home",
			component: Home,
		},
		{
			path: "/about",
			name: "About",
			component: () =>
				import(/* webpackChunkName: "about" */ "../views/About.vue"),
		},
	],

	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return { selector: to.hash };
		}

		return { x: 0, y: 0 };
	},
});

export default router;
