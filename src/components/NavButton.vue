<template>
	<router-link :to="{ path: path, hash: hash }" class="
			px-3
			mt-5
			m-w-54
			transform
			transition
			border-b-2 border-white border-opacity-0
			hover:border-opacity-100
		">{{ pathName }}</router-link>
</template>

<script lang="ts">
export default {
	name: "NavButton",
	props: {
		hash: String,
		path: String,
		pathName: String,
	},
};
</script>
