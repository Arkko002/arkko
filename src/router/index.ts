import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/about",
		name: "About",
		component: About,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,

	scrollBehavior(to, _from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}

		if (to.hash) {
			return { el: to.hash };
		}

		return { left: 0, top: 0 };
	},
});

export default router;
