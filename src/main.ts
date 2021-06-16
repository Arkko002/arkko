import Vue from "vue";
import App from "./App.vue";
import AOS from "aos";
import "aos/dist/aos.css";
import router from "./router";
import "./main.css";

new Vue({
	router,
	created() {
		AOS.init();
	},
	render: (h) => h(App),
}).$mount("#app");
