<template>
	<TheNavbar />
	<div class="home">
		<img alt="Vue logo" src="../assets/logo.png" />
		<Projects />
		<ContactInfo />
	</div>
</template>

<script lang="ts">
import TheNavbar from "@/components/TheNavbar.vue";
import ContactInfo from "@/components/ContactInfo.vue";
import Projects from "@/components/Projects.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "Home",
	components: {
		TheNavbar,
		ContactInfo,
		Projects,
	},
});
</script>
