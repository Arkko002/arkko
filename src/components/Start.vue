<template>
	<div>
		<Anchor anchorId="start" />
		<div id="start" class="flex flex-1 h-screen bg-gray-100">
			<div
				class="
					flex flex-col
					justify-center
					items-center
					flex-1 flex-nowrap
					w-1/2
				"
			>
				<span class="text-lg sm:text-2xl lg:text-3xl"
					>My name is Arkadiusz Kołodziejek</span
				>
				<span class="text-lg sm:text-xl md:text-2xl"
					>I'm a a full stack software developer</span
				>
        <StartNavButton path="/" hash="#projects" link-text="Take a look at some of my work"/>
        <StartNavButton path="/" hash="#contact" link-text="Contact me"/>
			</div>

			<!--<div class="w-1/2 overflow-hidden transform skew-x-12">-->
			<!--<img class="transform -skew-x-12" src="../../public/start-large.jpg" />-->
			<!--</div>-->
			<img
				class="object-fill w-1/2"
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
