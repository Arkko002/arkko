<template>
	<div>
		<Anchor anchorId="start" />
		<div id="start" class="flex flex-1 mb-8 h-screen bg-gray-100">
			<div class="flex flex-col items-center justify-center flex-1 w-1/2">
				<span class="text-3xl">About Me</span>
				<NavButton
					path="/"
					hash="#projects"
					pathName="Take a look at my projects"
				/>
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
import NavButton from "./NavButton.vue";
import Anchor from "./Anchor.vue";

export default Vue.extend({
	name: "Start",
	components: {
		NavButton,
		Anchor,
	},
});
</script>

<style></style>
