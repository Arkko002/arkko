import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const router = new VueRouter({
	mode: "history",

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
		{
			path: "/project/:name",
			name: "Project",
			component: () => import("../views/Project.vue"),
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
