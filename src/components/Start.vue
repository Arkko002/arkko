<template>
	<div>
		<Anchor anchorId="start" />
		<div
			id="start"
			class="
				flex flex-1
				h-full
				w-full
				bg-gray-100
				items-center
				flex-col
				md:flex-row
			"
		>
			<div
				class="
					flex flex-col
					justify-center
					items-center
					flex-1 flex-nowrap
					w-auto
					h-full
				"
			>
				<span class="text-lg sm:text-2xl"
					>My name is Arkadiusz Kołodziejek</span
				>
				<span class="text-lg sm:text-xl"
					>I'm a backend software developer</span
				>
				<StartNavButton
					path="/"
					hash="#projects"
					link-text="Take a look at some of my work"
				/>
				<StartNavButton path="/" hash="#contact" link-text="Contact me" />
			</div>
			<img
				class="
					object-fit
					w-full
					max-h-1/2
					order-first
					md:order-last md:w-1/2 md:h-full
				"
				src="../../public/img/start-large.jpg"
				alt="Welcome"
			/>
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
import Anchor from "./Anchor.vue";
import StartNavButton from "@/components/StartNavButton.vue";

export default Vue.extend({
	name: "Start",
	components: {
		StartNavButton,
		Anchor,
	},
});
</script>

<style></style>
