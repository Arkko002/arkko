<template>
	<div class="home">
		<TheNavbar />
		<img alt="Vue logo" src="../assets/logo.png" />
		<Projects />
		<ContactInfo />
	</div>
</template>

<script lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import Projects from "@/components/Projects.vue";
import Vue from "vue";

export default Vue.extend({
	name: "Home",
	components: {
		TheNavbar,
		ContactInfo,
		Projects,
	},
});
</script>
