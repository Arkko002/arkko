<template>
	<div id="app">
		<TheNavbar />
		<router-view />
		<TheFooter />
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import TheNavbar from "@/components/TheNavbar.vue";
import TheFooter from "@/components/TheFooter.vue";

export default Vue.extend({
	name: "App",
	components: {
		TheNavbar,
		TheFooter,
	},
});
</script>
