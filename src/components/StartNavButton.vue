<template>
	<router-link :to="{ path: path, hash: hash }" class="
			mt-10
			text-lg
			sm:text-2xl
			m-w-54
			transform
			transition
			border-b-2 border-black
			hover:bg-black hover:text-white
		">{{ linkText }}</router-link>
</template>

<script>
export default {
	name: "StartNavButton",
	props: {
		hash: String,
		path: String,
		linkText: String,
	},
};
</script>
