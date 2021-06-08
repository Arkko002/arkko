<template>
	<div id="start" class="flex flex-1 mb-8 overflow-visible bg-gray-100">
		<div class="flex flex-col flex-1 w-1/2">
			<span>About Me</span>
			<span>See my projects</span>
		</div>

		<div class="w-1/2 overflow-hidden transform skew-x-12">
			<img class="transform -skew-x-12" src="../../public/start-large.jpg" />
		</div>
	</div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "Start",
});
</script>

<style></style>
