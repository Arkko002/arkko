<template>
	<div class="
			sticky
			top-0
			z-50
			flex
			items-center
			justify-between
			h-16
			px-3
			text-white
			bg-black
		">
		<div class="flex flex-col flex-nowrap">
			<span>Arkadiusz Kołodziejek</span>
		</div>

		<nav class="flex h-full flex-nowrap sm:items-stretch sm:justify-end space-x-3">
			<NavButton path="/" hash="#start" pathName="Start" />
			<NavButton path="/" hash="#projects" pathName="Projects" />
			<NavButton path="/" hash="#contact" pathName="Contact" />
		</nav>
	</div>
</template>

<script lang="ts">
import NavButton from "./NavButton.vue";

export default {
	name: "TheNavbar",
	components: {
		NavButton,
	},
};
</script>

<style></style>
