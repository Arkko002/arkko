<template>
	<router-link
		:to="{ path: path, hash: hash }"
		class="
			px-3
			mt-5
			m-w-54
			border-b-2 border-white border-opacity-0
			hover:border-opacity-100
		"
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
