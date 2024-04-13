<template>
	<div class="relative">
		<Start />
		<Projects />
		<ContactInfo />
	</div>
</template>

<script lang="ts">
import Start from "../components/Start.vue";
import ContactInfo from "../components/ContactInfo.vue";
import Projects from "../components/Projects.vue";

export default {
	name: "Home",
	components: {
		Start,
		ContactInfo,
		Projects,
	},
};
</script>
