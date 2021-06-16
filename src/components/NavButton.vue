<template>
	<router-link
		:to="{ path: path, hash: hash }"
		class="px-3 py-2 hover:underline"
		>{{ pathName }}</router-link
	>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
	name: "NavButton",
	props: {
		hash: String,
		path: String,
		pathName: String,
	},
});
</script>
