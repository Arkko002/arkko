<template>
	<div>
		<Anchor anchorId="start" />
		<div id="start" class="flex flex-1 mb-8 h-screen bg-gray-100">
			<div class="flex flex-col justify-center items-center flex-1 flex-nowrap w-1/2">
				<span class="text-lg sm:text-2xl lg:text-3xl"
					>My name is Arkadiusz Kołodziejek</span
				>
				<span class="text-lg sm:text-xl md:text-2xl"
					>I'm a a full stack software developer</span
				>
				<router-link
					:to="{ path: '/', hash: '#projects' }"
					class="
						pt-10
						text-lg
						sm:text-2xl
						px-3
						mt-5
						m-w-54
						transform
						transition
						border-b-2 border-black border-opacity-0
						hover:border-opacity-100
					"
					>Take a look at some of my work</router-link
				>
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

export default Vue.extend({
	name: "Start",
	components: {
		Anchor,
	},
});
</script>

<style></style>
